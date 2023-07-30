import { Component, JSX } from 'solid-js';

import { Note } from '../model';

import styles from './styles.module.css';

type Props = Note & {
  deleteButtonSlot: JSX.Element;
  handleRedirectToDetailsNotePage: () => void;
};

export const NoteItem: Component<Props> = ({
  id,
  text,
  createdAt,
  deleteButtonSlot,
  handleRedirectToDetailsNotePage,
}) => {
  return (
    <div class={styles.card}>
      <div class={styles.main} onClick={handleRedirectToDetailsNotePage}>
        <div>ID: {id}</div>
        <div class={styles.text}>{text}</div>
      </div>
      <div class={styles.bottom}>
        <div class={styles.date}>{createdAt.toUTCString()}</div>
        <div class={styles.removeButton}>{deleteButtonSlot}</div>
      </div>
    </div>
  );
};
