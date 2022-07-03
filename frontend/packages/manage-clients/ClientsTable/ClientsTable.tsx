import React, { FC, ReactNode } from 'react';
import { Table } from 'ui';
import { InsuranceClient } from 'shared-types';
import { ITableHeader } from 'ui/components/Table/Table';
import { EmptyTable } from 'ui';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BE_URL } from '../axios';

const headers: ITableHeader<InsuranceClient>[] = [
  { label: 'Firstname', accessor: 'firstname' },
  { label: 'Lastname', accessor: 'lastname' },
  { label: 'Email', accessor: 'email' },
];

interface ClientsTableProps {
  header: ReactNode;
  onRowClick?: (client: InsuranceClient) => void;
}

export const ClientsTable: FC<ClientsTableProps> = ({ header, onRowClick }) => {
  const { data, isLoading } = useQuery('clients', () =>
    axios.get(BE_URL).then((res) => res.data as InsuranceClient[])
  );

  return (
    <Table
      data={data ? data : []}
      isLoading={isLoading}
      headers={headers}
      onRowClick={(item: InsuranceClient) =>
        onRowClick ? onRowClick(item) : null
      }
      emptyTableComponent={<EmptyTable title={'No data'} />}
      tableHeaderComponent={header}
    />
  );
};
