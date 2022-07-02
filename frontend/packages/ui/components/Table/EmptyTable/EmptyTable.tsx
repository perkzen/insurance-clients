import { FC, ReactNode } from 'react';
import classes from './EmptyTable.module.scss';
import { TbDatabaseOff } from 'react-icons/tb';

interface EmptyTableProps {
  title: ReactNode;
}

export const EmptyTable: FC<EmptyTableProps> = ({ title }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Icon}>
        <TbDatabaseOff />
      </div>
      <div className={classes.Title}>{title}</div>
    </div>
  );
};
