import { produce } from 'immer';

export const getSortedArrayBySearchText = <T>(
  array: T[],
  property: keyof T,
  value: string,
) => {
  return produce(array, (draft: T[]) =>
    draft.filter((item) =>
      String(item[property]).trim().toLowerCase().includes(value.toLowerCase()),
    ),
  );
};
