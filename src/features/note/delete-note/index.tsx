import { Component } from 'solid-js';

import { noteModel } from '../../../entities/note';

type Props = {
  id: string;
  onBeforeSuccess?: () => void; // костыльненько
  onAfterSuccess?: () => void;
};

export const DeleteNoteButton: Component<Props> = ({
  id,
  onBeforeSuccess,
  onAfterSuccess,
}) => {
  const handleClick = () => {
    const isConfirmed = confirm('Действительно хотите удалить заметку?');
    if (!isConfirmed) return;

    onBeforeSuccess?.();

    noteModel.deleteNote(id);

    onAfterSuccess?.();
  };

  return <button onClick={handleClick}>Удалить</button>;
};
