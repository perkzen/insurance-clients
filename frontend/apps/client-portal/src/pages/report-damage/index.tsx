import React from 'react';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { ReportDamageForm } from 'manage-damage-claims';
import { useAuth } from '../../context/AuthContext';

const ReportForm = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className={'flex flex-col justify-center items-center'}>
        <ReportDamageForm email={user?.email as string} />
      </div>
    </ProtectedRoute>
  );
};

export default ReportForm;
