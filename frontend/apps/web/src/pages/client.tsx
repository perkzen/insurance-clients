import React from 'react';
import { InsuranceClientForm } from 'micro-frontends/manage-clients';

const Client = () => {
  return (
    <div className={'flex flex-col justify-center items-center'}>
      <h1 className={'text-2xl font-bold mb-5'}>Add client</h1>
      <InsuranceClientForm />
    </div>
  );
};

export default Client;
