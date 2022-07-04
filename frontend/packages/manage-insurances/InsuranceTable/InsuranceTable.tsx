import React from 'react';
import { EmptyTable, Input, Table, TableHeader } from 'ui';
import { ITableHeader } from 'ui/components/Table/Table';
import { Insurance } from 'shared-types';
import { useQuery } from 'react-query';
import { BE_URL } from '../axios';
import axios from 'axios';

const headers: ITableHeader<Insurance>[] = [
  { label: 'Firstname', accessor: 'firstname' },
  { label: 'Lastname', accessor: 'lastname' },
  { label: 'Insurance', accessor: 'type' },
  { label: 'Registration Number', accessor: 'vehicleRegistration' },
  { label: 'Vehicle Type', accessor: 'vehicleType' },
  { label: 'Vehicle Km', accessor: 'vehicleKm' },
];

export const InsuranceTable = () => {
  const { data, isLoading } = useQuery('insurances', () =>
    axios.get(BE_URL).then((res) => res.data as Insurance[])
  );

  return (
    <Table
      data={data ? data : []}
      headers={headers}
      isLoading={isLoading}
      emptyTableComponent={<EmptyTable title={'No data'} />}
      tableHeaderComponent={
        <TableHeader
          title={'Insurances'}
          buttonLabel={'Add'}
          buttonAction={() => 1}
        />
      }
      searchComponent={
        <div className={'flex flex-row gap-4'}>
          <Input placeholder={'Search by client ...'} />
          <Input placeholder={'Search by vehicle registration ...'} />
        </div>
      }
    />
  );
};
