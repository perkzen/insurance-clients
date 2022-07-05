import React from 'react';
import { InsuranceClientForm } from 'manage-clients';
import { useRouter } from 'next/router';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const ClientsForm = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <ProtectedRoute>
      <div className={'flex flex-col justify-center items-center'}>
        <InsuranceClientForm clientId={parseInt(id)} />
      </div>
    </ProtectedRoute>
  );
};

export default ClientsForm;
