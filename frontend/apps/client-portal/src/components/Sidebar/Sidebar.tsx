import React from 'react';
import Navigation from '../Navigation/Navigation';
import Image from 'next/image';
import logo from '../../../public/car.png';

export const Sidebar = () => {
  return (
    <nav className={'bg-red-700 w-64 py-5'}>
      <h1
        className={
          'flex flex-row justify-center items-center text-white text-center text-xl gap-2'
        }
      >
        <Image src={logo} alt={'logo'} />
        <div className={'font-semibold flex flex-col'}>
          <p>Car</p>
          <p> Insurance</p>
        </div>
      </h1>
      <Navigation />
    </nav>
  );
};
