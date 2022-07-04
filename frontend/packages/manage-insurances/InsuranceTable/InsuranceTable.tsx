import React, { FC, ReactNode, useEffect, useState } from 'react';
import { EmptyTable, Input, Table, TableHeader } from 'ui';
import { ITableHeader } from 'ui/components/Table/Table';
import { Insurance } from 'shared-types';
import { useQuery } from 'react-query';
import { BE_URL } from '../axios';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const headers: ITableHeader<Insurance>[] = [
  { label: 'Firstname', accessor: 'firstname' },
  { label: 'Lastname', accessor: 'lastname' },
  { label: 'Insurance', accessor: 'type' },
  { label: 'Registration Number', accessor: 'vehicleRegistration' },
  { label: 'Vehicle Type', accessor: 'vehicleType' },
  { label: 'Vehicle Km', accessor: 'vehicleKm' },
];

interface ClientsTableProps {
  header: ReactNode;
  onRowClick?: (client: Insurance) => void;
}

export const InsuranceTable: FC<ClientsTableProps> = ({
  onRowClick,
  header,
}) => {
  const { data, isLoading } = useQuery('insurances', () =>
    axios.get(BE_URL).then((res) => res.data as Insurance[])
  );

  const { register, watch } = useForm<{
    client: string;
    reg: string;
  }>({
    defaultValues: {
      client: '',
      reg: '',
    },
  });

  const search = watch();

  const {
    data: filteredData,
    isLoading: isSearching,
    refetch,
  } = useQuery(
    'filtered-insurances',
    () => {
      const firstname = search.client.split(' ')[0];
      const lastname = search.client.split(' ')[1];
      return axios
        .get(
          `${BE_URL}/filter?firstname=${firstname}&lastname=${lastname}&reg=${search.reg}`
        )
        .then((res) => res.data as Insurance[]);
    },
    {
      enabled: search.client.length > 0 || search.reg.length > 0,
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, search.client, search.reg]);

  const tableData =
    search.client.length > 0 || search.reg.length > 0 ? filteredData : data;

  return (
    <Table
      data={tableData ? tableData : []}
      headers={headers}
      isLoading={isLoading}
      emptyTableComponent={<EmptyTable title={'No data'} />}
      tableHeaderComponent={header}
      onRowClick={(item: Insurance) => (onRowClick ? onRowClick(item) : null)}
      searchComponent={
        <div className={'flex flex-row gap-4'}>
          <Input placeholder={'Search by client ...'} {...register('client')} />
          <Input
            placeholder={'Search by vehicle registration ...'}
            {...register('reg')}
          />
        </div>
      }
    />
  );
};
