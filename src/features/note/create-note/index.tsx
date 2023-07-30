import { noteModel } from '#/entities/note';

export const CreateNoteButton = () => {
  const handleClick = () => {
    const text = prompt('Введите текст');

    if (!text) {
      alert('Не указано название!');
      return;
    }

    noteModel.createNote(text);
  };

  return <button onClick={handleClick}>Добавить новую заметку</button>;
};
