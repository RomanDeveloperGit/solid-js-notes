import { For, Show } from 'solid-js';

import { PageKey } from '#/shared/constants/pages';
import { getRedirectPageHandler } from '#/shared/lib/get-redirect-page-handler';

import { NoteCard, noteModel } from '#/entities/note';

import { SortBox } from '#/features/note/sort-box';
import { SearchBox } from '#/features/note/search-box';
import { DeleteNoteButton } from '#/features/note/delete-note';

import styles from './styles.module.css';

export const NoteList = () => {
  return (
    <Show
      when={noteModel.getNoteList().length}
      fallback={<div>У вас нет заметок</div>}
    >
      <div class={styles.filters}>
        <SearchBox />
        <SortBox />
      </div>
      <div class={styles.list}>
        <Show
          when={noteModel.getFilteredNoteList().length}
          fallback={<div>Ничего не найдено</div>}
        >
          <For
            each={noteModel.getFilteredNoteList()}
            fallback={<div>Загрузка...</div>}
          >
            {(item) => (
              <NoteCard
                deleteButtonSlot={<DeleteNoteButton id={item.id} />}
                handleRedirectToDetailsNotePage={getRedirectPageHandler(
                  PageKey.NoteDetails,
                  item.id,
                )}
                {...item}
              />
            )}
          </For>
        </Show>
      </div>
    </Show>
  );
};
