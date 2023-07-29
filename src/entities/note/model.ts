import { createSignal } from 'solid-js';

import { SortType } from '../../shared/constants/sort';
import { createImmerableSignal } from '../../shared/lib/create-immer-signal';
import { getSortedArrayByCreatedAt } from '../../shared/lib/get-sorted-array-by-created-at';

import { createNoteEntity } from './lib';

export type Note = {
  id: string;
  text: string;
  createdAt: Date;
};

const [list, setList] = createImmerableSignal<Note[]>([]);
const [sort, setSort] = createSignal<SortType>(SortType.Asc);

export const getNoteList = () => {
  return list();
};

export const getFilteredNoteList = () => {
  const originalList = list();

  return getSortedArrayByCreatedAt(originalList, sort());
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

export const deleteNote = (id: string) => {
  setList((noteList) => {
    const index = noteList.findIndex((note) => note.id === id);
    if (index === -1) return;

    noteList.splice(index, 1);
  });

  return true;
};

export const deleteNoteList = () => {
  setList((noteList) => {
    noteList.length = 0;
  });

  return true;
};

export const getNoteListSort = () => {
  return sort();
};

export const setNoteListSort = (type: SortType) => {
  setSort(type);

  return true;
};
