import { produce } from 'immer';

const getFormattedForSearchString = (text: string) => {
  return text.trim().toLocaleLowerCase();
};

export const getSortedArrayBySearchText = <T>(
  array: T[],
  property: keyof T,
  value: string,
) => {
  return produce(array, (draft: T[]) =>
    draft.filter((item) =>
      getFormattedForSearchString(String(item[property])).includes(
        getFormattedForSearchString(value),
      ),
    ),
  );
};
