import React, { FC } from 'react';
import { Button, Input, Select } from 'ui';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { BE_URL } from '../consts';
import axios from 'axios';

interface ClientFromData {
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  gender: string;
  children: number;
  married: number;
  income: string;
}

const defaultValues: ClientFromData = {
  firstname: '',
  lastname: '',
  email: '',
  birthday: '',
  gender: 'male',
  children: 0,
  married: 0,
  income: 'average',
};

export const InsuranceClientForm: FC = () => {
  const mutation = useMutation((newClient: ClientFromData) => {
    return axios.post(BE_URL, newClient);
  });

  const { register, handleSubmit, formState } = useForm<ClientFromData>({
    defaultValues,
  });

  const { errors } = formState;

  const onSubmit = (data: ClientFromData) => {
    console.log(data);
    mutation.mutate(data);
  };
  return (
    <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex flex-row gap-2'}>
        <Input
          label={'Firstname'}
          {...register('firstname', { required: 'This field is required' })}
          errorMessage={errors.firstname?.message}
        />
        <Input
          label={'Lastname'}
          {...register('lastname', { required: 'This field is required' })}
          errorMessage={errors.lastname?.message}
        />
      </div>
      <Input
        label={'email'}
        {...register('email', { required: 'This field is required' })}
        errorMessage={errors.email?.message}
      />
      <Select
        label={'Gender'}
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        {...register('gender', { required: 'This field is required' })}
      />
      <Select
        label={'Income'}
        options={[
          { label: 'Low', value: 'minmal' },
          { label: 'Below average', value: 'below average' },
          { label: 'Average', value: 'average' },
          { label: 'Above average', value: 'above average' },
        ]}
        {...register('income', { required: 'This field is required' })}
      />
      <Select
        options={[
          { label: 'Yes', value: 1 },
          { label: 'No', value: 0 },
        ]}
        label={'Married'}
        {...register('married', {
          valueAsNumber: true,
          min: 0,
          required: 'This field is required',
        })}
      />
      <Input
        label={'Birthday'}
        type={'date'}
        {...register('birthday', { required: 'This field is required' })}
        errorMessage={errors.birthday?.message}
      />
      <Input
        label={'Children'}
        type={'number'}
        {...register('children', { required: 'This field is required' })}
        errorMessage={errors.children?.message}
      />
      <Button>Save</Button>
    </form>
  );
};
