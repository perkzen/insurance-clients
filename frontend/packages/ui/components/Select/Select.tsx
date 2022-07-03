import React, { forwardRef } from 'react';
import classes from './Select.module.scss';
import { v4 } from 'uuid';

interface SelectProps {
  options: { label: string; value: number | boolean | string }[];
  label: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, ...props }, ref) => {
    return (
      <div className={classes.Container}>
        <label>{label}</label>
        <select {...props} ref={ref}>
          {options?.map((item) => (
            <option key={v4()} value={item.value as string}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
