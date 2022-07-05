import React, { useState } from 'react';
import { Button, Input } from 'ui';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useRouter } from 'next/router';

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: RegisterFormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    defaultValues,
  });

  const { errors } = formState;

  const onSubmit = async (data: RegisterFormData) => {
    setError('');
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await router.push('/');
    } catch (error) {
      setError('Invalid form data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={'flex flex-col justify-center items-center w-full mt-20'}>
      <h1 className={'text-2xl font-bold'}>Register</h1>
      <p className={'font-semibold text-red-600 mt-4'}>{error}</p>
      <form className={'flex flex-col w-1/3'} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Email"
          {...register('email', { required: 'This field is required!' })}
          errorMessage={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'This field is required!' })}
          errorMessage={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword', {
            required: 'This field is required!',
          })}
          errorMessage={errors.confirmPassword?.message}
        />
        <Link href="/account/login">
          <a className={'text-neutral-600 mt-2 ml-4'}>Back to login</a>
        </Link>

        <Button loading={loading} className={'mt-4'}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
