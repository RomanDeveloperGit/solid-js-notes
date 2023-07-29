import { produce } from 'immer';

// @cross-import!!!
import { SortType } from '../constants/sort';

export const getSortedArrayByCreatedAt = <T extends { createdAt: Date }>(
  array: T[],
  type: SortType,
) => {
  return produce(array, (draft) => {
    draft.sort((a, b) => {
      const diff = a.createdAt.getTime() - b.createdAt.getTime();

      return type === SortType.Asc ? diff : -diff;
    });
  });
};
