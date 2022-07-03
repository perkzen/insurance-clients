import React, { forwardRef, HTMLProps } from 'react';
import classes from './Input.module.scss';
import { classNames } from '../../../utils/classNames';
import './focus.scss';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  errorMessage?: string;
  className?: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, className = '', label, ...props }, ref) => {
    return (
      <div className={classes.Container}>
        <input
          {...props}
          placeholder={' '}
          ref={ref}
          className={classNames(
            className,
            errorMessage ? classes.InputError : ''
          )}
        />
        <label>{label}</label>
        {errorMessage && <small>{errorMessage}</small>}
      </div>
    );
  }
);

Input.displayName = 'Input';
