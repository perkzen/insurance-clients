export interface TableHeader<T> {
  label: string;
  accessor: keyof T;
}
