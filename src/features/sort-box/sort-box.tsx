import type { JSX } from 'solid-js/jsx-runtime';

import { SORT_TYPE_TEXT, SortType } from '../../shared/constants/sort';

import { noteModel } from '../../entities/note';

import styles from './styles.module.css';

export const SortBox = () => {
  const handleChange: JSX.EventHandlerUnion<HTMLSelectElement, Event> = (
    event,
  ) => {
    noteModel.setNoteListSort(event.currentTarget.value as SortType);
  };

  return (
    <div class={styles.box}>
      <div>Сортировка по дате создания</div>
      <select onChange={handleChange}>
        <option
          selected={noteModel.getNoteListSort() === SortType.Asc}
          value={SortType.Asc}
        >
          {SORT_TYPE_TEXT[SortType.Asc]}
        </option>
        <option
          selected={noteModel.getNoteListSort() === SortType.Desc}
          value={SortType.Desc}
        >
          {SORT_TYPE_TEXT[SortType.Desc]}
        </option>
      </select>
    </div>
  );
};
