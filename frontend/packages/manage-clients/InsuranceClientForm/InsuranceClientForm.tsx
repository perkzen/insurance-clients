import React, { FC } from 'react';
import { Button, Input, Select } from 'ui';

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
  // const { register } = useForm<ClientFromData>({
  //   defaultValues,
  // });
  return (
    <form className={'flex flex-col gap-4'}>
      hello
      {/*<div className={'flex flex-row gap-2'}>*/}
      {/*  <Input*/}
      {/*    label={'Firstname'} //{...register('firstname')}*/}
      {/*  />*/}
      {/*  <Input*/}
      {/*    label={'Lastname'} //{...register('lastname')}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<Input*/}
      {/*  label={'Birthday'}*/}
      {/*  type={'date'} //{...register('birthday')}*/}
      {/*/>*/}
      {/*<Select*/}
      {/*  label={'Gender'}*/}
      {/*  options={[*/}
      {/*    { label: 'Male', value: 'male' },*/}
      {/*    { label: 'Female', value: 'female' },*/}
      {/*  ]}*/}
      {/*  //{...register('gender')}*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  label={'Children'}*/}
      {/*  type={'number'} // {...register('children')}*/}
      {/*/>*/}
      {/*<Select*/}
      {/*  label={'Income'}*/}
      {/*  options={[*/}
      {/*    { label: 'Low', value: 'minmal' },*/}
      {/*    { label: 'Below average', value: 'below average' },*/}
      {/*    { label: 'Average', value: 'average' },*/}
      {/*    { label: 'Above average', value: 'above average' },*/}
      {/*  ]}*/}
      {/*  // {...register('income')}*/}
      {/*/>*/}
      {/*<Select*/}
      {/*  options={[*/}
      {/*    { label: 'Yes', value: 1 },*/}
      {/*    { label: 'No', value: 0 },*/}
      {/*  ]}*/}
      {/*  label={'Married'}*/}
      {/*  //{...register('married')}*/}
      {/*/>*/}
      {/*<Button>Save</Button>*/}
    </form>
  );
};
