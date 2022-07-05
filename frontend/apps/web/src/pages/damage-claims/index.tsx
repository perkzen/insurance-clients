import React from 'react';
import { DamageReportsTable } from 'manage-damage-claims';
import { TableHeader } from 'ui';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const DamageClaims = () => {
  return (
    <ProtectedRoute>
      <DamageReportsTable header={<TableHeader title={'Damage reports'} />} />
    </ProtectedRoute>
  );
};

export default DamageClaims;
