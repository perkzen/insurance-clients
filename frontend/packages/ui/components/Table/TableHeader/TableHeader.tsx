import React, { FC } from 'react';
import classes from '../Table.module.scss';
import { Button } from '../../Button/Button';

interface TableHeaderProps {
  title: string;
  buttonLabel: string;
  buttonAction: () => void;
}

export const TableHeader: FC<TableHeaderProps> = ({
  title,
  buttonAction,
  buttonLabel,
}) => {
  return (
    <div className={classes.Header}>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {buttonLabel && <Button onClick={buttonAction}>{buttonLabel}</Button>}
      </div>
    </div>
  );
};
