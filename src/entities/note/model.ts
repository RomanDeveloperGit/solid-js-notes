import { createImmerableSignal } from '../../shared/lib';

import { createNoteEntity } from './lib';

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

export const createNoteList = (texts: string[]) => {
  const newNotes: Note[] = texts.map((text) => createNoteEntity(text));

  setListStore((noteList) => {
    noteList.push(...newNotes);
  });

  return newNotes;
};

export const createNote = (text: string) => {
  const newNote: Note = createNoteEntity(text);

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
