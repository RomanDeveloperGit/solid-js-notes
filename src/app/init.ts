import { PageKey } from '#/shared/constants/pages';
import { getRedirectPageHandler } from '#/shared/lib/get-redirect-page-handler';
import { generateRandomTextList } from '#/shared/lib/generate-random-text-list';

import { noteModel } from '#/entities/note';

export const initDataApplication = () => {
  const redirectToNoteListPage = getRedirectPageHandler(PageKey.NoteList);
  redirectToNoteListPage();

  const generatedRandomTextList = generateRandomTextList(3);
  noteModel.createNoteList(generatedRandomTextList);
  // noteModel.setNoteListSort('ASC');
};
