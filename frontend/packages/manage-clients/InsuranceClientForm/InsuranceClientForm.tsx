import React, { FC, useEffect } from 'react';
import { Button, Input, Select } from 'ui';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { BE_URL } from '../axios';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

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
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: res, isLoading } = useQuery(
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

  const updateClient = useMutation(
    (newClient: ClientFromData) => {
      return axios.put(`${BE_URL}/${clientId}`, newClient);
    },
    {
      onSuccess: () => queryClient.invalidateQueries('client'),
    }
  );

  const deleteClient = useMutation(
    () => axios.delete(`${BE_URL}/${clientId}`),
    { onSuccess: () => router.push('/') }
  );

  const handleDelete = async () => {
    await toast.promise(deleteClient.mutateAsync(), {
      loading: 'Deleting...',
      success: 'Client deleted!',
      error: 'Error deleting!',
    });
  };

  const { register, handleSubmit, formState, reset } = useForm<ClientFromData>({
    defaultValues,
  });

  const { errors } = formState;

  useEffect(() => {
    const editingClient = (): ClientFromData => {
      if (!isEdit) {
        return defaultValues;
      }

      if (!res) {
        return defaultValues;
      }

      const bday = new Date(res.data.birthday);
      const bdayStr = format(bday, 'yyyy-MM-dd');
      return { ...res.data, birthday: bdayStr };
    };

    reset(editingClient());
  }, [isEdit, res, reset, isLoading]);

  const onSubmit = async (data: ClientFromData) => {
    await toast.promise(
      isEdit ? updateClient.mutateAsync(data) : addClient.mutateAsync(data),
      {
        loading: 'Saving...',
        success: 'Save!',
        error: 'Error saving!',
      }
    );

    !isEdit && reset();
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
      <Select label={'Gender'} {...register('gender')}>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </Select>
      <Select
        label={'Income'}
        {...register('income', { required: 'This field is required' })}
      >
        <option value="minmal">Low</option>
        <option value="below average">Below Average</option>
        <option value="average">Average</option>
        <option value="above average">Above average</option>
      </Select>
      <Select
        label={'Married'}
        {...register('married', {
          valueAsNumber: true,
          min: 0,
          required: 'This field is required',
        })}
      >
        <option value="1">Yes</option>
        <option value="0">No</option>
      </Select>
      <Input
        label={'Birthday'}
        type={'date'}
        {...register('birthday', { required: 'This field is required' })}
        errorMessage={errors.birthday?.message}
      />
      <Input
        label={'Children'}
        type={'number'}
        {...register('children', {
          valueAsNumber: true,
          min: 0,
          required: 'This field is required',
        })}
        errorMessage={errors.children?.message}
      />
      <div className={'flex flex-row gap-2'}>
        <Button>Save</Button>
        {isEdit && (
          <Button type={'button'} onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
};
