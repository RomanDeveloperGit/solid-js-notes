import { noteModel } from '../../entities/note';

export const DeleteNoteListButton = () => {
  const handleClick = () => {
    const isConfirmed = confirm('Действительно хотите удалить все заметки?');
    if (!isConfirmed) return;

    noteModel.deleteNoteList();
  };

  return <button onClick={handleClick}>Удалить все заметки</button>;
};
