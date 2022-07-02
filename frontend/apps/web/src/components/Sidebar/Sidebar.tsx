import React from 'react';
import Navigation from '../Navigation/Navigation';

export const Sidebar = () => {
  return (
    <nav className={'bg-red-700 w-64 py-5'}>
      <h1
        className={
          'flex flex-row justify-center items-center text-white text-center text-xl gap-2'
        }
      >
        <span className={'font-semibold'}>Insurance</span>
      </h1>
      <Navigation />
    </nav>
  );
};
