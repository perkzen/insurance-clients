import React, { FC } from 'react';
import { Button, Input, Select } from 'ui';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import instance, { BE_DAMAGE_CLAIMS_URL } from '../axios';
import { toast } from 'react-hot-toast';

interface ReportFormData {
  date: string;
  comment: string;
  insuranceType: string;
}

const defaultValues: ReportFormData = {
  date: '',
  comment: '',
  insuranceType: '',
};

interface Report {
  date: string;
  comment: string;
  insuranceType: string;
  email: string;
}

interface ReportDamageFormProps {
  email: string;
}

export const ReportDamageForm: FC<ReportDamageFormProps> = ({ email }) => {
  const { register, handleSubmit, reset } = useForm<ReportFormData>({
    defaultValues,
  });

  const { mutateAsync } = useMutation((newReport: Report) =>
    instance.post(`${BE_DAMAGE_CLAIMS_URL}/submit`, newReport)
  );

  const onSubmit = async (data: ReportFormData) => {
    if (!email) {
      toast.error('You must be logged in to submit a report');
      return;
    }
    const newReport: Report = { ...data, email: email };
    await toast.promise(mutateAsync(newReport), {
      loading: 'Submitting...',
      success: 'Submitted successfully',
      error: 'Error submitting',
    });
    reset();
  };

  return (
    <>
      <h1 className={'text-2xl font-bold mb-5'}>Submit damage report</h1>
      <form
        className={'flex flex-col gap-4 w-1/3'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type={'date'}
          label={'Date'}
          {...register('date', { required: 'This field is required!' })}
        />
        <Select
          label={'Insurance type'}
          {...register('insuranceType', { required: 'This field is required' })}
        >
          <option value="car">Car</option>
        </Select>
        <textarea
          className={'shadow rounded p-2'}
          style={{ borderWidth: 1, borderRadius: 25 }}
          rows={4}
          cols={50}
          {...register('comment', { required: 'This field is required!' })}
          placeholder={'Add a comment about the damage ...'}
        />
        <Button>Submit</Button>
      </form>
    </>
  );
};
