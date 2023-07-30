import { PageKey } from '../../shared/constants/pages';
import { getRedirectPageHandler } from '../../shared/lib/get-redirect-page-handler';

import { NoteRow, noteModel } from '../../entities/note';

import { DeleteNoteButton } from '../../features/note/delete-note';
import { UpdateNoteTextButton } from '../../features/note/update-note-text';

export const NoteDetailsPage = () => {
  const noteId = window.location.pathname.split('/')[2];
  const note = noteModel.getNoteById(noteId) as noteModel.Note;
  console.log(note);

  const handleBeforeDeleteSuccess = () => {
    const redirectToNoteListPage = getRedirectPageHandler(PageKey.NoteList);
    redirectToNoteListPage();
  };

  return (
    <section>
      <button onClick={() => history.back()}>Назад</button>
      <NoteRow
        id={note.id}
        text={note.text}
        createdAt={note.createdAt}
        editButtonSlot={<UpdateNoteTextButton id={note.id} />}
        deleteButtonSlot={
          <DeleteNoteButton
            id={note.id}
            onBeforeSuccess={handleBeforeDeleteSuccess}
          />
        }
      />
    </section>
  );
};
