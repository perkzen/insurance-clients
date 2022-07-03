import React, { forwardRef, HTMLProps, ReactNode } from 'react';
import classes from './Select.module.scss';

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  children?: ReactNode;
  label: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, ...props }, ref) => {
    return (
      <div className={classes.Container}>
        <label>{label}</label>
        <select {...props} ref={ref}>
          {children}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
