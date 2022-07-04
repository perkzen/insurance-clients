import React, { FC, ReactNode } from 'react';
import { ImUsers } from 'react-icons/im';
import { FaCarCrash, FaFileContract } from 'react-icons/fa';
import Link from 'next/link';

const Navigation: FC = () => {
  const items: { label: string; href: string; icon: ReactNode }[] = [
    { label: 'Clients', href: '/', icon: <ImUsers /> },
    { label: 'Insurances', href: '/insurances', icon: <FaFileContract /> },
    { label: 'Damage reports', href: '/damage-claims', icon: <FaCarCrash /> },
  ];

  return (
    <div className={'flex flex-col gap-4 px-5 mt-5'}>
      {items.map((item, index) => (
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
