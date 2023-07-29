import { noteModel } from '../entities/note';

import { generateRandomTextList } from '../features/generate-random-note-list/lib';

export const init = () => {
  const generatedRandomTextList = generateRandomTextList(3);

  noteModel.createNoteList(generatedRandomTextList);
  // noteModel.setNoteListSort('ASC');
};
