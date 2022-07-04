import React from 'react';
import { DamageReportsTable } from 'manage-damage-claims';
import { TableHeader } from 'ui';

const DamageClaims = () => {
  return (
    <div>
      <DamageReportsTable header={<TableHeader title={'Damage reports'} />} />
    </div>
  );
};

export default DamageClaims;
