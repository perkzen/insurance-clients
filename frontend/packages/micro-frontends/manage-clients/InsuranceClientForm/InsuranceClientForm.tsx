import React, { FC } from 'react';

interface ClientFromData {
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  gender: string;
  children: number;
}

const defaultValues: ClientFromData = {
  firstname: '',
  lastname: '',
  email: '',
  birthday: '',
  gender: '',
  children: 0,
};

export const InsuranceClientForm: FC = () => {
  return <>form</>;
};
