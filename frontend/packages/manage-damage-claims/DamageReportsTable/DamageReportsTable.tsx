import React, { FC, ReactNode } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BE_DAMAGE_CLAIMS_URL } from '../axios';
import { DamageClaim } from 'shared-types';
import { EmptyTable, Table } from 'ui';
import { ITableHeader } from 'ui/components/Table/Table';

const headers: ITableHeader<DamageClaim>[] = [
  { label: 'Email', accessor: 'email' },
  { label: 'Comment', accessor: 'comment' },
  { label: 'Submitted at', accessor: 'submittedAt' },
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

  return (
    <Table
      data={data ? data : []}
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
