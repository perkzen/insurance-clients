import { Insurance } from '../types/Insurance';

export const filterList = (list: Insurance[], searchValue: string) => {
  return list.filter((item) => {
    const fullName = `${item.firstname}${item.lastname}`.toLowerCase();
    const trimmedSearchValue = searchValue.replace(/\s+/g, '').toLowerCase();
    return fullName.includes(trimmedSearchValue);
  });
};
