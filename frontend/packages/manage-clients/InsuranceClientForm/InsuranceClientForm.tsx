import React, { FC, useEffect } from 'react';
import { Button, Input, Select } from 'ui';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { BE_URL } from '../axios';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';

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

interface InsuranceClientFormProps {
  clientId?: number;
}

export const InsuranceClientForm: FC<InsuranceClientFormProps> = ({
  clientId,
}) => {
  const isEdit: boolean = !isNaN(clientId!);

  const { data: res } = useQuery(
    'client',
    () =>
      axios
        .get(`${BE_URL}/${clientId}`)
        .then((res) => res as AxiosResponse<ClientFromData>),
    { enabled: isEdit }
  );
  const addClient = useMutation((newClient: ClientFromData) => {
    return axios.post(BE_URL, newClient);
  });

  const updateClient = useMutation((newClient: ClientFromData) => {
    return axios.put(`${BE_URL}/${clientId}`, newClient);
  });

  const { register, handleSubmit, formState, reset } = useForm<ClientFromData>({
    defaultValues,
  });

  const { errors } = formState;

  useEffect(() => {
    const editingClient = (): ClientFromData => {
      if (!isEdit) {
        return { ...defaultValues };
      }

      if (!res) {
        return { ...defaultValues };
      }
      const bday = new Date(res.data.birthday);
      const bdayStr = format(bday, 'yyyy-MM-dd');
      console.log(bdayStr);
      return { ...res.data, birthday: bdayStr };
    };

    reset(editingClient());
  }, [isEdit, res, reset]);

  const onSubmit = async (data: ClientFromData) => {
    await toast.promise(
      isEdit ? updateClient.mutateAsync(data) : addClient.mutateAsync(data),
      {
        loading: 'Saving...',
        success: 'Save!',
        error: 'Error saving!',
      }
    );
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
        label={'Email'}
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
