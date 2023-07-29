import { Component } from 'solid-js';

import { noteModel } from '../../entities/note';

type Props = {
  id: string;
};

export const DeleteNoteButton: Component<Props> = ({ id }) => {
  const handleClick = () => {
    const isConfirmed = confirm('Действительно хотите удалить заметку?');
    if (!isConfirmed) return;

    noteModel.deleteNote(id);
  };

  return <button onClick={handleClick}>Удалить заметку</button>;
};
