import { v4 as uuidv4 } from 'uuid';

import { createImmerableSignal } from '../../shared/libs';

export type Note = {
  id: string;
  text: string;
  createdAt: Date;
};

export const [listStore, setListStore] = createImmerableSignal<Note[]>([]);

export const getNoteList = () => {
  return listStore();
};

export const getNoteById = (id: string) => {
  return listStore().find((note) => note.id === id);
};

// Инишиал загрузка списка извне компонента - добавить функцию

export const createNote = (text: string) => {
  const newNote: Note = {
    id: uuidv4(),
    text,
    createdAt: new Date(),
  };

  setListStore((noteList) => {
    noteList.push(newNote);
  });

  return newNote;
};

export const deleteNote = (id: string) => {
  setListStore((noteList) => {
    const index = noteList.findIndex((note) => note.id === id);
    if (index === -1) return;

    noteList.splice(index, 1);
  });

  return true;
};

export const deleteNoteList = () => {
  setListStore((noteList) => {
    noteList.length = 0;
  });

  return true;
};
