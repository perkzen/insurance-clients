import * as React from 'react';
import classes from './Button.module.scss';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={classes.Container}>{children}</button>;
};
