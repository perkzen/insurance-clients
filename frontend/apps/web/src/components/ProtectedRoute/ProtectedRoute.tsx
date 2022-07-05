import React, { FC, ReactNode } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth?.user) {
    router.push('/account/login');
    return null;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
