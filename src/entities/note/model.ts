import { createSignal } from 'solid-js';

import { SortType } from '#/shared/constants/sort';
import { getSortedArrayByCreatedAt } from '#/shared/lib/sort/get-sorted-array-by-created-at';
import { getSortedArrayBySearchText } from '#/shared/lib/sort/get-sorted-array-by-search-text';
import { createImmerableSignal } from '#/shared/lib/create-immer-signal';

import { createNoteEntity } from './lib';

export type Note = {
  id: string;
  text: string;
  createdAt: Date;
};

const [list, setList] = createImmerableSignal<Note[]>([]);
const [sort, setSort] = createSignal<SortType>(SortType.Asc);
const [searchText, setSearchText] = createSignal<string>('');

export const getNoteList = () => {
  return list();
};

// Как будто бы можно такие отдельные геттеры утащить в фичи/виджеты с сигналами вместе? Подумать
export const getFilteredNoteList = () => {
  const originalList = list();

  // знаю, что по памяти здесь бедово может быть, но тут Immer ради Immer'а и не более)
  const sortedListBySearchText = getSortedArrayBySearchText(
    originalList,
    'text',
    searchText(),
  );

  return getSortedArrayByCreatedAt(sortedListBySearchText, sort());
};

export const getNoteById = (id: string) => {
  return list().find((note) => note.id === id);
};

export const createNoteList = (texts: string[]) => {
  const newNotes: Note[] = texts.map((text) => createNoteEntity(text));

  setList((noteList) => {
    noteList.push(...newNotes);
  });

  return newNotes;
};

export const createNote = (text: string) => {
  const newNote: Note = createNoteEntity(text);

  setList((noteList) => {
    noteList.push(newNote);
  });

  return newNote;
};

export const updateNoteText = (id: string, newText: string) => {
  setList((noteList) => {
    noteList.forEach((note) => {
      if (note.id !== id) return;

      note.text = newText;
    });
  });
};

export const deleteNote = (id: string) => {
  setList((noteList) => {
    const index = noteList.findIndex((note) => note.id === id);
    if (index === -1) return;

    noteList.splice(index, 1);
  });
};

export const deleteNoteList = () => {
  setList((noteList) => {
    noteList.length = 0;
  });
};

export const getNoteListSort = () => {
  return sort();
};

export const setNoteListSort = (type: SortType) => {
  setSort(type);
};

export const getNoteListSearchText = () => {
  return searchText();
};

export const setNoteListSearchText = (newSearchText: string) => {
  // add debounce

  setSearchText(newSearchText);
};
