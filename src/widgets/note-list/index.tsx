import { For } from 'solid-js';

import { NoteItem, noteModel } from '../../entities/note';

import styles from './styles.module.css';
import { DeleteNoteButton } from '../../features/delete-note';

export const NoteList = () => {
  return (
    <div class={styles.list}>
      {noteModel.getNoteList().length ? (
        <For each={noteModel.getNoteList()} fallback={<div>Загрузка...</div>}>
          {(item) => (
            <NoteItem
              deleteButtonSlot={<DeleteNoteButton id={item.id} />}
              {...item}
            />
          )}
        </For>
      ) : (
        <div>У вас нет заметок</div>
      )}
    </div>
  );
};
