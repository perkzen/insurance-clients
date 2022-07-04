import React from 'react';
import { InsuranceClientForm } from 'manage-clients';
import { useRouter } from 'next/router';

const ClientsForm = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div className={'flex flex-col justify-center items-center'}>
      <InsuranceClientForm clientId={parseInt(id)} />
    </div>
  );
};

export default ClientsForm;
