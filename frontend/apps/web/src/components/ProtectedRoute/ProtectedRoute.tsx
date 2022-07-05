import React, { FC, ReactNode } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import Login from '../../pages/account/login';

interface Props {
  children: ReactNode;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const auth = useAuth();

  if (!auth?.user) {
    return <Login />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
