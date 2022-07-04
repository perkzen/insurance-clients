import React from 'react';
import { useRouter } from 'next/router';
import { InsuranceForm } from 'manage-insurances';

const Insurance = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div className={'flex flex-col justify-center items-center'}>
      <InsuranceForm insuranceId={parseInt(id)} />
    </div>
  );
};

export default Insurance;
