import React, { ReactNode } from 'react';
import classes from './Table.module.scss';
import { v4 } from 'uuid';
import TableLoading from './TableLoading/TableLoading';
import { ClaimStatus } from 'shared-types';

export interface ITableHeader<T> {
  label: string;
  accessor: keyof T;
}

interface TableProps<T> {
  data: T[];
  headers: ITableHeader<T>[];
  className?: string;
  isLoading?: boolean;
  emptyTableComponent: ReactNode;
  tableHeaderComponent: ReactNode;
  onPrimaryActionClick?: (item: T) => void;
  onSecondaryActionClick?: (item: T) => void;
  primaryActionText?: string;
  secondaryActionText?: string;
  onRowClick?: (item: T) => void;
  showStatus?: boolean;
  statusData?: string[];
  searchComponent?: ReactNode;
}

export const showStatusData = (status: string) => {
  switch (status) {
    case ClaimStatus.SUBMITTED:
      return (
        <td>
          <span
            className={`inline-flex rounded-full bg-neutral-100 px-2 text-xs font-semibold leading-5 text-neutral-700`}
          >
            {status}
          </span>
        </td>
      );
    case ClaimStatus.APPROVED:
      return (
        <td>
          <span
            className={`inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800`}
          >
            {status}
          </span>
        </td>
      );
    case ClaimStatus.REJECTED:
      return (
        <td>
          <span
            className={`inline-flex rounded-full bg-red-200 px-2 text-xs font-semibold leading-5 text-red-800`}
          >
            {status}
          </span>
        </td>
      );
    default:
      return <td>{status}</td>;
  }
};

const getButtonColor = (
  status: string,
  type: 'primary' | 'secondary'
): string => {
  if (status === ClaimStatus.SUBMITTED && type === 'primary') {
    return 'text-green-600 rounded-full bg-green-100 shadow py-2 px-4';
  }

  if (status === ClaimStatus.SUBMITTED && type === 'secondary') {
    return 'text-red-600 rounded-full bg-red-100 shadow py-2 px-4';
  }

  return 'text-neutral-600 rounded-full bg-neutral-100 shadow py-2 px-4';
};

export const Table = <T,>({
  data,
  headers,
  emptyTableComponent,
  tableHeaderComponent,
  isLoading,
  onRowClick,
  showStatus,
  statusData,
  onPrimaryActionClick,
  onSecondaryActionClick,
  primaryActionText,
  secondaryActionText,
  searchComponent,
}: TableProps<T>) => {
  return (
    <div className={classes.Container}>
      {tableHeaderComponent}
      {searchComponent}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table>
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th key={v4()} align={'center'}>
                        <span>{header.label}</span>
                      </th>
                    ))}
                    {showStatus && (
                      <th>
                        <span>Status</span>
                      </th>
                    )}
                    {onPrimaryActionClick && (
                      <th scope="col" className="sr-only" colSpan={1} />
                    )}
                    {onSecondaryActionClick && (
                      <th scope="col" className="sr-only" colSpan={1} />
                    )}
                    {statusData && <th />}
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={headers.length + 1}>
                        <TableLoading />
                      </td>
                    </tr>
                  ) : (
                    <>
                      {data.length > 0 ? (
                        <>
                          {data.map((dataItem, index) => (
                            <tr
                              key={v4()}
                              className={onRowClick && classes.Clickable}
                              onClick={(e: any) =>
                                onRowClick &&
                                e.target.type !== 'button' &&
                                onRowClick(dataItem)
                              }
                            >
                              {headers.map((header) => (
                                <td key={v4()}>
                                  {
                                    dataItem[
                                      header.accessor
                                    ] as unknown as string
                                  }
                                </td>
                              ))}
                              {statusData && showStatusData(statusData[index])}

                              {onPrimaryActionClick && (
                                <td>
                                  <button
                                    type={'button'}
                                    className={getButtonColor(
                                      statusData
                                        ? statusData[index]
                                        : 'no status',
                                      'primary'
                                    )}
                                    onClick={() =>
                                      onPrimaryActionClick(dataItem)
                                    }
                                  >
                                    {primaryActionText}
                                  </button>
                                </td>
                              )}

                              {onSecondaryActionClick && (
                                <td>
                                  <button
                                    type={'button'}
                                    className={getButtonColor(
                                      statusData
                                        ? statusData[index]
                                        : 'no status',
                                      'secondary'
                                    )}
                                    disabled={
                                      statusData &&
                                      statusData[index] !==
                                        ClaimStatus.SUBMITTED
                                    }
                                    onClick={() =>
                                      onSecondaryActionClick(dataItem)
                                    }
                                  >
                                    {secondaryActionText}
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </>
                      ) : (
                        <tr>
                          <td colSpan={headers.length + 1}>
                            {emptyTableComponent}
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
