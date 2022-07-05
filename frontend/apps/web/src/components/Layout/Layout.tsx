import React, { FC, ReactNode } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Button } from 'ui';
import { useAuth } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className={'flex flex-row h-screen'}>
      <Sidebar />
      <div className={'w-full'}>
        <div
          className={'flex flex-row justify-end w-full h-12 py-8 pr-5 shadow'}
        >
          {user && (
            <div className={'self-center'}>
              <Button onClick={() => signOut(auth)}>Logout</Button>
            </div>
          )}
        </div>
        <main className={'py-10 px-20 w-full'}>{children}</main>
      </div>
    </div>
  );
};
