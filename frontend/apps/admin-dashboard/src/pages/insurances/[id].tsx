import React from 'react';
import { useRouter } from 'next/router';
import { InsuranceForm } from 'manage-insurances';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const Insurance = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <ProtectedRoute>
      <div className={'flex flex-col justify-center items-center'}>
        <InsuranceForm insuranceId={parseInt(id)} />
      </div>
    </ProtectedRoute>
  );
};

export default Insurance;
