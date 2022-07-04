import React from 'react';
import { TableHeader } from 'ui';
import { useRouter } from 'next/router';
import { ClientsTable } from 'manage-clients';
import { InsuranceClient } from 'shared-types';

export default function InsuranceClientsTable() {
  const router = useRouter();

  return (
    <>
      <ClientsTable
        header={
          <TableHeader
            title={'Company Clients'}
            buttonLabel={'Add client'}
            buttonAction={() => router.push('/client/add')}
          />
        }
        onRowClick={async (client: InsuranceClient) => {
          await router.push(`/client/${client.id}`);
        }}
      />
    </>
  );
}
