import { For } from 'solid-js';

import { NoteItem, noteModel } from '../../entities/note';

import { SortBox } from '../../features/sort-box';
import { SearchBox } from '../../features/search-box';
import { DeleteNoteButton } from '../../features/delete-note';

import styles from './styles.module.css';

export const NoteList = () => {
  return (
    <div class={styles.container}>
      {noteModel.getFilteredNoteList().length ||
      noteModel.getNoteListSearchText() ? (
        <>
          <div class={styles.filters}>
            <SearchBox />
            <SortBox />
          </div>
          <div class={styles.list}>
            {/* При поиске fallback остается навсегда, если ничего не находится. Исправить */}
            <For
              each={noteModel.getFilteredNoteList()}
              fallback={<div>Загрузка...</div>}
            >
              {(item) => (
                <NoteItem
                  deleteButtonSlot={<DeleteNoteButton id={item.id} />}
                  {...item}
                />
              )}
            </For>
          </div>
        </>
      ) : (
        <div>У вас нет заметок</div>
      )}
    </div>
  );
};
