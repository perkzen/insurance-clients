import React from 'react';
import { Table, TableHeader } from 'ui';
import { InsuranceClient } from 'shared-types';
import { ITableHeader } from 'ui/components/Table/Table';
import { EmptyTable } from 'ui';

const headers: ITableHeader<InsuranceClient>[] = [
  { label: 'Firstname', accessor: 'lastname' },
  { label: 'Lastname', accessor: 'firstname' },
  { label: 'Email', accessor: 'email' },
];
export const ClientsTable = () => {
  return (
    <Table
      data={[]}
      headers={headers}
      emptyTableComponent={<EmptyTable title={'No data'} />}
      tableHeaderComponent={
        <TableHeader
          title={'Company Clients'}
          buttonLabel={'Add client'}
          buttonAction={() => 1}
        />
      }
    />
  );
};
