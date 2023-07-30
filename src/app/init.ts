import { generateRandomTextList } from '../shared/lib/generate-random-text-list';

import { noteModel } from '../entities/note';

export const init = () => {
  const generatedRandomTextList = generateRandomTextList(3);

  noteModel.createNoteList(generatedRandomTextList);
  // noteModel.setNoteListSort('ASC');
};
