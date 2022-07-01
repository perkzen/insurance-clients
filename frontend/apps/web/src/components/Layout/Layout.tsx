import React, { FC, ReactNode } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={'flex flex-row h-screen'}>
      <Sidebar />
      <main className={'py-10 px-20'}>{children}</main>
    </div>
  );
};
