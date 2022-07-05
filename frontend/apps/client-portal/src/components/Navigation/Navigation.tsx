import React, { FC, ReactNode } from 'react';
import { AiOutlineForm } from 'react-icons/ai';
import Link from 'next/link';

const Navigation: FC = () => {
  const userRoutes: {
    label: string;
    href: string;
    icon: ReactNode;
  }[] = [
    {
      label: 'Report damage',
      href: '/report-damage',
      icon: <AiOutlineForm />,
    },
  ];

  return (
    <div className={'flex flex-col gap-4 px-5 mt-5'}>
      {userRoutes.map((item, index) => (
        <div
          key={index}
          className={
            'text-white text-center font-semibold  p-2 shadow-2xl bg-red-800 hover:bg-red-700 rounded-full'
          }
        >
          <Link href={item.href}>
            <a className={'flex flex-row justify-center items-center gap-2'}>
              {item.icon} {item.label}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
