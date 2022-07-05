import React from 'react';
import Image from 'next/image';
import logo from '../../../assets/car.png';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className={'bg-red-600 w-full h-16 flex flex-row items-center p-2'}>
      <Image src={logo} alt={'logo'} />
      <h1 className={'text-2xl font-bold text-white ml-5'}>Car insurance</h1>
      {user && (
        <div>
          <Link href={'/report-damage'}>
            <a>Report damage</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
