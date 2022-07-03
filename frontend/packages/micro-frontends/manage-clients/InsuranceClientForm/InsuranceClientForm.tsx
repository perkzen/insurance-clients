import React, { FC } from 'react';
import { Button, Input } from 'ui';

interface ClientFromData {
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  gender: string;
  children: number;
  married: string;
  income: string;
}

const defaultValues: ClientFromData = {
  firstname: '',
  lastname: '',
  email: '',
  birthday: '',
  gender: '',
  children: 0,
  married: '',
  income: '',
};

export const InsuranceClientForm: FC = () => {
  return (
    <form className={'flex flex-col'} style={{ gap: '1.5rem' }}>
      <div className={'flex flex-row gap-2'}>
        <Input label={'Firstname'} />
        <Input label={'Lastname'} />
      </div>
      <Input label={'Birthday'} type={'date'} />
      <Input label={'Gender'} />
      <Input label={'Income'} />
      <Input label={'Married'} />

      <Button>Save</Button>
    </form>
  );
};
