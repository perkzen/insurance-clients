import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select } from 'ui';
import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { FraudPrediction } from 'shared-types';
import { BE_FRAUD_DETECTION_URL } from '../axios';
import { toast } from 'react-hot-toast';

interface PredictionFormData {
  AGE: string;
  GENDER: string;
  DRIVING_EXPERIENCE: string;
  EDUCATION: string;
  VEHICLE_OWNERSHIP: number;
  VEHICLE_TYPE: string;
  VEHICLE_YEAR: string;
  MARRIED: number;
  CHILDREN: number;
  DUIS: number;
  SPEEDING_VIOLATIONS: number;
  PAST_ACCIDENTS: number;
  INCOME: string;
  ANNUAL_KM: number;
}

const defaultValues: PredictionFormData = {
  AGE: '',
  GENDER: '',
  DRIVING_EXPERIENCE: '',
  EDUCATION: '',
  VEHICLE_TYPE: '',
  VEHICLE_OWNERSHIP: 0,
  VEHICLE_YEAR: '',
  MARRIED: 0,
  CHILDREN: 0,
  DUIS: 0,
  PAST_ACCIDENTS: 0,
  SPEEDING_VIOLATIONS: 0,
  INCOME: '',
  ANNUAL_KM: 0,
};

export const FraudPredictionForm = () => {
  const [probability, setProbability] = useState(0);

  const { register, handleSubmit, formState } = useForm<PredictionFormData>({
    defaultValues,
  });

  const { mutateAsync } = useMutation(
    (data: PredictionFormData) => axios.post(BE_FRAUD_DETECTION_URL, data),
    {
      onSuccess: (data) => {
        const { data: response } = data as AxiosResponse<FraudPrediction>;
        setProbability(response.fraud_probability * 100);
      },
    }
  );

  const { errors } = formState;
  const onSubmit = async (data: PredictionFormData) => {
    await toast.promise(mutateAsync(data), {
      loading: 'Predicting...',
      success: 'Finished!',
      error: 'Error predicting!',
    });
  };
  return (
    <>
      <h1
        className={'text-2xl font-bold mb-5'}
        style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}
      >
        Make Prediction
      </h1>
      <form
        className={'flex flex-col gap-4 w-2/3'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={'flex flex-row gap-2'}>
          <Select
            label={'Age'}
            {...register('AGE', { required: 'This field is required' })}
          >
            <option value={'16-25'}>16-25</option>
            <option value={'26-39'}>26-39</option>
            <option value={'40-64'}>40-64</option>
            <option value={'65'}>65+</option>
          </Select>
          <Select
            label={'Gender'}
            {...register('GENDER', { required: 'This field is required' })}
          >
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
          </Select>

          <Select
            label={'Education'}
            {...register('EDUCATION', { required: 'This field is required' })}
          >
            <option value={'none'}>None</option>
            <option value={'high school'}>High school</option>
            <option value={'university'}>University</option>
          </Select>
        </div>
        <div className={'flex flex-row gap-2'}>
          <Select
            label={'Married'}
            {...register('MARRIED', {
              valueAsNumber: true,
              min: 0,
              required: 'This field is required',
            })}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Select>
          <Input
            label={'Children'}
            type={'number'}
            {...register('CHILDREN', {
              valueAsNumber: true,
              min: 0,
              required: 'This field is required',
            })}
            errorMessage={errors.CHILDREN?.message}
          />
          <Select
            label={'Income'}
            {...register('INCOME', { required: 'This field is required' })}
          >
            <option value="minmal">Low</option>
            <option value="below average">Below Average</option>
            <option value="average">Average</option>
            <option value="above average">Above average</option>
          </Select>
        </div>
        <div className={'flex flex-row gap-2'}>
          <Select
            label={'Driving experience'}
            {...register('DRIVING_EXPERIENCE', {
              required: 'This field is required',
            })}
          >
            <option value="0-9">0-9</option>
            <option value="10-19">10-19</option>
            <option value="20-29">20-29</option>
            <option value="30">30</option>
          </Select>
          <Select
            label={'Vehicle year'}
            {...register('VEHICLE_YEAR', {
              required: 'This field is required',
            })}
          >
            <option value="before 2015">Before 2015</option>
            <option value="after 2015">After 2015</option>
          </Select>
          <Select
            label={'Vehicle type'}
            {...register('VEHICLE_TYPE', {
              required: 'This field is required',
            })}
          >
            <option value="sedan">Sedan</option>
            <option value="after 2015">Sport car</option>
          </Select>
        </div>
        <div className={'flex flex-row gap-2'}>
          <Input
            label={'Annual KM'}
            type={'number'}
            {...register('ANNUAL_KM', {
              valueAsNumber: true,
              min: 0,
              required: 'This field is required',
            })}
            errorMessage={errors.ANNUAL_KM?.message}
          />
          <Input
            label={'Vehicle ownership'}
            type={'number'}
            {...register('VEHICLE_OWNERSHIP', {
              valueAsNumber: true,
              min: 0,
              required: 'This field is required',
            })}
            errorMessage={errors.VEHICLE_OWNERSHIP?.message}
          />
        </div>
        <div className={'flex flex-row gap-2'}>
          <Input
            label={'Past accidents'}
            type={'number'}
            {...register('PAST_ACCIDENTS', {
              valueAsNumber: true,
              min: 0,
              required: 'This field is required',
            })}
            errorMessage={errors.PAST_ACCIDENTS?.message}
          />
          <Input
            label={'Speeding violations'}
            type={'number'}
            {...register('SPEEDING_VIOLATIONS', {
              valueAsNumber: true,
              min: 0,
              required: 'This field is required',
            })}
            errorMessage={errors.SPEEDING_VIOLATIONS?.message}
          />
          <Input
            label={'Driving under influences'}
            type={'number'}
            {...register('DUIS', {
              valueAsNumber: true,
              min: 0,
              required: 'This field is required',
            })}
            errorMessage={errors.DUIS?.message}
          />
        </div>

        <Button>Make Prediction</Button>
      </form>
      <div style={{ fontWeight: 700, marginTop: '1rem' }}>
        Prediction: {probability.toFixed(0)}%
      </div>
    </>
  );
};
