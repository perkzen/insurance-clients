import React from 'react';
import { Table, TableHeader } from 'ui';
import { InsuranceClient } from 'shared-types';
import { ITableHeader } from 'ui/components/Table/Table';
import { EmptyTable } from 'ui';
import { useQuery } from 'react-query';
import instance from 'utils/axios';

const headers: ITableHeader<InsuranceClient>[] = [
  { label: 'Firstname', accessor: 'lastname' },
  { label: 'Lastname', accessor: 'firstname' },
  { label: 'Email', accessor: 'email' },
  { label: 'Gender', accessor: 'gender' },
  { label: 'Birthday', accessor: 'birthday' },
];
export const ClientsTable = () => {
  const { data: res, isLoading } = useQuery('clients', () =>
    instance.get('insurance-clients')
  );
  const data = res?.data as unknown as InsuranceClient[];

  return (
    <div>
      <Table
        data={data}
        isLoading={isLoading}
        headers={headers}
        onRowClick={() => 1}
        emptyTableComponent={<EmptyTable title={'No data'} />}
        tableHeaderComponent={
          <TableHeader
            title={'Company Clients'}
            buttonLabel={'Add client'}
            buttonAction={() => 1}
          />
        }
      />
    </div>
  );
};
