import React, { FC, ReactNode } from 'react';
import { Table } from 'ui';
import { InsuranceClient } from 'shared-types';
import { ITableHeader } from 'ui/components/Table/Table';
import { EmptyTable } from 'ui';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { BE_URL } from '../axios';

const headers: ITableHeader<InsuranceClient>[] = [
  { label: 'Firstname', accessor: 'lastname' },
  { label: 'Lastname', accessor: 'firstname' },
  { label: 'Email', accessor: 'email' },
  { label: 'Gender', accessor: 'gender' },
  { label: 'Birthday', accessor: 'birthday' },
];

interface ClientsTableProps {
  header: ReactNode;
}

export const ClientsTable: FC<ClientsTableProps> = ({ header }) => {
  const { data: response, isLoading } = useQuery('clients', () =>
    axios.get(BE_URL).then((res) => res as AxiosResponse<InsuranceClient[]>)
  );

  return (
    <div>
      <Table
        data={response ? response.data : []}
        isLoading={isLoading}
        headers={headers}
        onRowClick={() => 1}
        emptyTableComponent={<EmptyTable title={'No data'} />}
        tableHeaderComponent={header}
      />
    </div>
  );
};
