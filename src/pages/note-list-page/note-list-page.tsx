import { GenerateRandomNoteListButton } from '../../features/generate-random-note-list';
import { CreateNoteButton } from '../../features/create-note';
import { DeleteNoteListButton } from '../../features/delete-note-list';

import { NoteList } from '../../widgets/note-list';

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
