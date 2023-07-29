// сделать тут сигнал, поменять его тут нсколько раз, ререндерятся ли дочерние?

import { Component, For } from 'solid-js';

import { NoteItem, noteModel } from '../../entities/note';

import styles from './styles.module.css';

type Props = {
  list: noteModel.Note[];
};

export const NoteList: Component<Props> = ({ list }) => {
  return (
    <div class={styles.list}>
      {list.length ? (
        <For each={list} fallback={<div>Загрузка...</div>}>
          {(item) => <NoteItem {...item} />}
        </For>
      ) : (
        <div>У вас нет заметок</div>
      )}
    </div>
  );
};
