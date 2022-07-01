import React from 'react';
import { FaCarCrash } from 'react-icons/fa';
import Navigation from '../Navigation/Navigation';

export const Sidebar = () => {
  return (
    <nav className={'bg-red-600 w-56 py-5'}>
      <h1
        className={
          'flex flex-row justify-center items-center text-white text-center text-xl gap-2'
        }
      >
        <FaCarCrash />
        <span className={'font-semibold'}>Insurance</span>
      </h1>
      <Navigation />
    </nav>
  );
};
