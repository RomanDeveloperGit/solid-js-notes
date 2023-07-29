import { Component } from 'solid-js';

import { Note } from '../model';

import styles from './styles.module.css';

export const NoteItem: Component<Note> = ({ id, text, createdAt }) => {
  return (
    <div class={styles.card}>
      <div>ID: {id}</div>
      <div class={styles.text}>{text}</div>
      <div class={styles.date}>{createdAt.toDateString()}</div>
    </div>
  );
};
