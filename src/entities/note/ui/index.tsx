import { Component, JSX } from 'solid-js';

import { Note } from '../model';

import styles from './styles.module.css';

type Props = Note & {
  deleteButtonSlot: JSX.Element;
};

export const NoteItem: Component<Props> = ({
  id,
  text,
  createdAt,
  deleteButtonSlot,
}) => {
  return (
    <div class={styles.card}>
      <div>ID: {id}</div>
      <div class={styles.text}>{text}</div>
      <div class={styles.bottom}>
        <div class={styles.date}>{createdAt.toDateString()}</div>
        <div class={styles.removeButton}>{deleteButtonSlot}</div>
      </div>
    </div>
  );
};
