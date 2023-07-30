import { Component } from 'solid-js';

import { noteModel } from '#/entities/note';

type Props = {
  id: string;
};

export const UpdateNoteTextButton: Component<Props> = ({ id }) => {
  const handleClick = () => {
    const newText = prompt('Введите новый текст');

    if (!newText) {
      alert('Не указан текст!');
      return;
    }

    noteModel.updateNoteText(id, newText);
  };

  return <button onClick={handleClick}>Редактировать</button>;
};
