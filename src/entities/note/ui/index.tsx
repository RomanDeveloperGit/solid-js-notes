import { Component, JSX } from 'solid-js';

import { Note } from '../model';

import styles from './styles.module.css';

export const NoteCard: Component<
  Note & {
    deleteButtonSlot: JSX.Element;
    handleRedirectToDetailsNotePage: () => void;
  }
> = ({
  id,
  text,
  createdAt,
  deleteButtonSlot,
  handleRedirectToDetailsNotePage,
}) => {
  return (
    <div class={styles.card}>
      <div class={styles.cardMain} onClick={handleRedirectToDetailsNotePage}>
        <div>ID: {id}</div>
        <div class={styles.cardText}>{text}</div>
      </div>
      <div class={styles.cardBottom}>
        <div>{createdAt.toUTCString()}</div>
        <div>{deleteButtonSlot}</div>
      </div>
    </div>
  );
};

export const NoteRow: Component<
  Note & {
    editButtonSlot: JSX.Element;
    deleteButtonSlot: JSX.Element;
  }
> = ({ id, text, createdAt, editButtonSlot, deleteButtonSlot }) => {
  return (
    <div class={styles.row}>
      <div class={styles.rowButtonBox}>
        {editButtonSlot}
        {deleteButtonSlot}
      </div>
      <div>ID: {id}</div>
      <div>Text: {text}</div>
      <div>Created at: {createdAt.toUTCString()}</div>
    </div>
  );
};
