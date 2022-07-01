import React, { FC } from 'react';
import Link from 'next/link';

const Navigation: FC = () => {
  const items: { label: string; href: string }[] = [
    { label: 'Manage clients', href: '' },
    { label: 'Manage insurances', href: '' },
    { label: 'Report claim', href: '' },
  ];

  return (
    <div className={'flex flex-col gap-4 px-5 mt-5'}>
      {items.map((item, index) => (
        <div
          key={index}
          className={
            'text-white text-center font-semibold border border-2 p-2 rounded-md shadow-2xl hover:bg-red-500'
          }
        >
          <Link href={item.href}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
