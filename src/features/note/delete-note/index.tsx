import { Component } from 'solid-js';

import { noteModel } from '#/entities/note';

type Props = {
  id: string;
  onClick?: (originalHandler: () => void) => void;
};

export const DeleteNoteButton: Component<Props> = ({ id, onClick }) => {
  const handleDelete = () => {
    noteModel.deleteNote(id);
  };

  const handleClick = () => {
    const isConfirmed = confirm('Действительно хотите удалить заметку?');
    if (!isConfirmed) return;

    if (!onClick) {
      handleDelete();
      return;
    }

    onClick(handleDelete);
  };

  return <button onClick={handleClick}>Удалить</button>;
};
