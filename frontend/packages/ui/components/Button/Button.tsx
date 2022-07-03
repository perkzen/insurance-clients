import * as React from 'react';
import classes from './Button.module.scss';
import { FC, ReactNode } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { classNames } from '../../classNames';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled,
  loading,
  type = 'submit',
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(className, classes.Container)}
      onClick={onClick}
      type={type}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
};
