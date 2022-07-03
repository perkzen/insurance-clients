import React, { forwardRef, HTMLProps } from 'react';
import classes from './Input.module.scss';
import { classNames } from 'utils';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  errorMessage?: string;
  className?: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, className = '', label, ...props }, ref) => {
    return (
      <div className={classes.Container}>
        <label>{label}</label>
        <input
          {...props}
          placeholder={' '}
          ref={ref}
          className={classNames(
            className,
            errorMessage ? classes.InputError : ''
          )}
        />
        {errorMessage && <small>{errorMessage}</small>}
      </div>
    );
  }
);

Input.displayName = 'Input';
