import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Input } from 'ui';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ADMIN_EMAIL, useAuth } from '../../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { User } from '@firebase/auth-types';

interface LoginFormData {
  email: string;
  password: string;
}

const defaultValues: LoginFormData = {
  email: '',
  password: '',
};

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/account/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    defaultValues,
  });

  const { errors } = formState;

  const onSubmit = async (data: LoginFormData) => {
    setError('');
    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (res.user.email === ADMIN_EMAIL) {
        await router.push('/');
      } else {
        await router.push('/report-damage');
      }
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={'flex flex-col justify-center items-center w-full'}>
      <h1 className={'text-2xl font-bold'}>Login</h1>
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
        <span className={'text-neutral-600 mt-2 ml-4'}>
          Don&apos;t have an account?
          <Link href="/account/register">
            <a className={'text-red-600'}> Register here</a>
          </Link>
        </span>
        <Button loading={loading} className={'mt-4'}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
