import React from 'react';
import Image from 'next/image';
import logo from '../../../assets/car.png';

const Navbar = () => {
  return (
    <div className={'bg-red-600 w-full h-16 flex flex-row items-center p-2'}>
      <Image src={logo} alt={'logo'} />
      <h1 className={'text-2xl font-bold text-white ml-5'}>Car insurance</h1>
    </div>
  );
};

export default Navbar;
