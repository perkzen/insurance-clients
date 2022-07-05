import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select } from 'ui';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';
import instance from '../axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

interface InsuranceFormData {
  id?: number;
  firstname: string;
  lastname: string;
  type: string;
  from: string;
  to: string;
  vehicleRegistration: string;
  vehicleType: string;
  vehicleKm: number;
  speedingTickets: number;
  drunkDrivingTickets: number;
}

const defaultValues: InsuranceFormData = {
  firstname: '',
  lastname: '',
  type: '',
  from: '',
  to: '',
  vehicleRegistration: '',
  vehicleType: '',
  vehicleKm: 0,
  speedingTickets: 0,
  drunkDrivingTickets: 0,
};

interface InsuranceFormProps {
  insuranceId?: number;
}

export const InsuranceForm: FC<InsuranceFormProps> = ({ insuranceId }) => {
  const isEdit: boolean = !isNaN(insuranceId!);
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: res, isLoading } = useQuery(
    'insurance',
    () =>
      instance
        .get(`/${insuranceId}`)
        .then((res) => res as AxiosResponse<InsuranceFormData>),
    { enabled: isEdit }
  );

  const addInsurance = useMutation((newInsurance: InsuranceFormData) =>
    instance.post('/', newInsurance)
  );

  const updateInsurance = useMutation(
    (newInsurance: InsuranceFormData) => {
      return instance.put(`/${insuranceId}`, newInsurance);
    },
    {
      onSuccess: () => queryClient.invalidateQueries('client'),
    }
  );

  const { register, reset, handleSubmit, formState } =
    useForm<InsuranceFormData>({
      defaultValues,
    });

  const { errors } = formState;

  useEffect(() => {
    const editingInsurance = (): InsuranceFormData => {
      if (!isEdit) {
        return defaultValues;
      }

      if (!res) {
        return defaultValues;
      }

      const from = new Date(res.data.from);
      const to = new Date(res.data.to);
      const fromStr = format(from, 'yyyy-MM-dd');
      const toStr = format(to, 'yyyy-MM-dd');
      return { ...res.data, from: fromStr, to: toStr };
    };

    reset(editingInsurance());
  }, [isEdit, res, reset]);

  const onSubmit = async (data: InsuranceFormData) => {
    await toast.promise(
      isEdit
        ? updateInsurance.mutateAsync({ ...data, id: insuranceId })
        : addInsurance.mutateAsync(data),
      {
        loading: 'Saving...',
        success: 'Save!',
        error: 'Error saving!',
      }
    );

    !isEdit && reset();
  };

  return (
    <>
      <h1
        className={'text-2xl font-bold mb-5'}
        style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}
      >
        {isEdit ? 'Edit insurance' : 'Add new insurance'}
      </h1>
      <form
        className={'flex flex-col gap-4'}
        style={{ width: '50%' }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div className={'flex flex-row gap-2'}>
          <Select
            label={'Vehicle type'}
            {...register('vehicleType', { required: 'This field is required' })}
          >
            <option value="sport">Sport</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="motorcycle'">Motorcycle</option>
            <option value="other">other</option>
          </Select>
          <Select
            label={'Insurance type'}
            {...register('type', { required: 'This field is required' })}
          >
            <option value="car">Car</option>
          </Select>
        </div>

        <div className={'flex flex-row gap-2'}>
          <Input
            label={'Vehicle registration number'}
            {...register('vehicleRegistration', {
              required: 'This field is required',
            })}
            errorMessage={errors.vehicleRegistration?.message}
          />

          <Input
            label={"Vehicle's km"}
            type={'number'}
            {...register('vehicleKm', {
              required: 'This field is required',
              valueAsNumber: true,
              min: 0,
            })}
            errorMessage={errors.vehicleKm?.message}
          />
        </div>

        <div className={'flex flex-row gap-2'}>
          <Input
            label={'Start date'}
            type={'date'}
            {...register('from', { required: 'This field is required' })}
            errorMessage={errors.from?.message}
          />
          <Input
            label={'End date'}
            type={'date'}
            {...register('to', { required: 'This field is required' })}
            errorMessage={errors.to?.message}
          />
        </div>
        <div className={'flex flex-row gap-2'}>
          <Input
            label={'Number of speeding tickets'}
            type={'number'}
            {...register('speedingTickets', {
              required: 'This field is required',
              valueAsNumber: true,
              min: 0,
            })}
            errorMessage={errors.speedingTickets?.message}
          />
          <Input
            label={'Number of drunk driving tickets'}
            type={'number'}
            {...register('drunkDrivingTickets', {
              required: 'This field is required',
              valueAsNumber: true,
              min: 0,
            })}
            errorMessage={errors.drunkDrivingTickets?.message}
          />
        </div>
        <Button>Save</Button>
      </form>
    </>
  );
};
