import { v4 as uuidv4 } from 'uuid';

export const createNoteEntity = (text: string) => {
  return {
    id: uuidv4(),
    text,
    createdAt: new Date(),
  };
};
