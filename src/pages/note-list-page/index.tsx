import { GenerateRandomNoteListButton } from '#/features/note/generate-random-note-list';
import { CreateNoteButton } from '#/features/note/create-note';
import { DeleteNoteListButton } from '#/features/note/delete-note-list';

import { NoteList } from '#/widgets/note-list';

import styles from './styles.module.css';

export const NoteListPage = () => {
  return (
    <section class={styles.section}>
      <div class={styles.buttonBox}>
        <GenerateRandomNoteListButton />
        <CreateNoteButton />
        <DeleteNoteListButton />
      </div>
      <NoteList />
    </section>
  );
};
