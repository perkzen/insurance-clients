import React, { FC, ReactNode } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { BE_DAMAGE_CLAIMS_URL } from '../axios';
import { ClaimStatus, DamageClaim } from 'shared-types';
import { EmptyTable, Table } from 'ui';
import { ITableHeader } from 'ui/components/Table/Table';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

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
  const queryClient = useQueryClient();
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

  const { mutateAsync } = useMutation(
    ({ id, status }: { id: number; status: ClaimStatus }) =>
      axios.put(`${BE_DAMAGE_CLAIMS_URL}/review/${id}`, {
        status: status,
      }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('damage-reports');
      },
    }
  );

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
      onPrimaryActionClick={async (item: DamageClaim) =>
        await toast.promise(
          mutateAsync({ id: item.id, status: ClaimStatus.APPROVED }),
          {
            loading: 'Updating...',
            success: ClaimStatus.APPROVED,
            error: 'Error updating!',
          }
        )
      }
      onSecondaryActionClick={async (item: DamageClaim) =>
        await toast.promise(
          mutateAsync({ id: item.id, status: ClaimStatus.REJECTED }),
          {
            loading: 'Updating...',
            success: ClaimStatus.REJECTED,
            error: 'Error updating!',
          }
        )
      }
    />
  );
};

// await toast.promise(
//       isEdit ? updateClient.mutateAsync(data) : addClient.mutateAsync(data),
//       {
//         loading: 'Saving...',
//         success: 'Save!',
//         error: 'Error saving!',
//       }
//     );
