import { ClientsTable } from '../../../../packages/micro-frontends/manage-clients';
import { TableHeader } from 'ui';
import React from 'react';
import { useRouter } from 'next/router';

export default function InsuranceClientsTable() {
  const router = useRouter();

  return (
    <>
      <ClientsTable
        header={
          <TableHeader
            title={'Company Clients'}
            buttonLabel={'Add client'}
            buttonAction={() => router.push('/client')}
          />
        }
      />
    </>
  );
}
