import React, { FC, ReactNode } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BE_DAMAGE_CLAIMS_URL } from '../axios';
import { DamageClaim } from 'shared-types';
import { EmptyTable, Table } from 'ui';
import { ITableHeader } from 'ui/components/Table/Table';
import { format } from 'date-fns';

const headers: ITableHeader<DamageClaim>[] = [
  { label: 'Email', accessor: 'email' },
  { label: 'Comment', accessor: 'comment' },
  { label: 'Date', accessor: 'date' },
];

interface ReportTableProps {
  header: ReactNode;
  onRowClick?: (client: DamageClaim) => void;
}

export const DamageReportsTable: FC<ReportTableProps> = ({
  header,
  onRowClick,
}) => {
  const { data, isLoading } = useQuery('damage-reports', () =>
    axios.get(BE_DAMAGE_CLAIMS_URL).then((res) => res.data as DamageClaim[])
  );

  const statusData = data?.map((item) => item.status);

  const formattedData = data?.map((item) => {
    return {
      ...item,
      date: format(new Date(item.date), 'dd/MM/yyyy'),
    };
  });
  return (
    <Table
      data={formattedData ? formattedData : []}
      isLoading={isLoading}
      headers={headers}
      showStatus
      statusData={statusData}
      onRowClick={(item: DamageClaim) => (onRowClick ? onRowClick(item) : null)}
      emptyTableComponent={<EmptyTable title={'No data'} />}
      tableHeaderComponent={header}
      primaryActionText={'Approve'}
      secondaryActionText={'Reject'}
      onPrimaryActionClick={(item: DamageClaim) => 1}
      onSecondaryActionClick={(item: DamageClaim) => 1}
    />
  );
};
