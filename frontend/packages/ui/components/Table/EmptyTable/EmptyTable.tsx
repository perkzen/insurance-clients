import { FC, ReactNode } from 'react';
import classes from './EmptyTable.module.scss';
import { FaDatabase } from 'react-icons/fa';

interface EmptyTableProps {
  title: ReactNode;
}

const EmptyTable: FC<EmptyTableProps> = ({ title }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Icon}>
        <FaDatabase width={70} height={70} />
      </div>
      <div className={classes.Title}>{title}</div>
    </div>
  );
};

export default EmptyTable;
