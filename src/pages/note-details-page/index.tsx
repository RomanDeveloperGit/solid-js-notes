import { PageKey } from '#/shared/constants/pages';
import { getRedirectPageHandler } from '#/shared/lib/get-redirect-page-handler';

import { NoteRow, noteModel } from '#/entities/note';

import { UpdateNoteTextButton } from '#/features/note/update-note-text';
import { DeleteNoteButton } from '#/features/note/delete-note';

export const NoteDetailsPage = () => {
  // Почему-то здесь сработает реактивность на note переменную в рендере, а в виджете нет
  const noteId = window.location.pathname.split('/')[2];
  const note = noteModel.getNoteById(noteId) as noteModel.Note;

  const handleDelete = (originalHandler: () => void) => {
    const redirectToNoteListPage = getRedirectPageHandler(PageKey.NoteList);

    redirectToNoteListPage();
    originalHandler();
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
          <DeleteNoteButton id={note.id} onClick={handleDelete} />
        }
      />
    </section>
  );
};
