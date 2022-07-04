import React from 'react';
import { InsuranceTable } from 'manage-insurances';
import { TableHeader } from 'ui';
import { useRouter } from 'next/router';
import { Insurance } from 'shared-types';

const Insurances = () => {
  const router = useRouter();

  return (
    <InsuranceTable
      header={
        <TableHeader
          title={'Insurances'}
          buttonLabel={'Add insurance'}
          buttonAction={() => router.push('/insurances/add')}
        />
      }
      onRowClick={async (insurance: Insurance) => {
        await router.push(`/insurances/${insurance.id}`);
      }}
    />
  );
};

export default Insurances;
