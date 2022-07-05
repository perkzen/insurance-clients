import React from 'react';
import { ReportDamageForm } from 'manage-damage-claims';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const ReportDamage = () => {
  return (
    <ProtectedRoute>
      <div className={'flex flex-col justify-center items-center'}>
        <ReportDamageForm />
      </div>
    </ProtectedRoute>
  );
};

export default ReportDamage;
