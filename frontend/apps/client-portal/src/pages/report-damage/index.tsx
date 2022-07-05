import React from 'react';
import { ReportDamageForm } from 'manage-damage-claims';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../context/AuthContext';

const ReportDamage = () => {
  const { user } = useAuth();
  return (
    <ProtectedRoute>
      <div className={'flex flex-col justify-center items-center'}>
        <ReportDamageForm email={user?.email as string} />
      </div>
    </ProtectedRoute>
  );
};

export default ReportDamage;
