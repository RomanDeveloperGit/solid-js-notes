import { Note, setListStore } from '../../entities/note/model';
import { v4 } from 'uuid';


export const AddNoteButton = () => {
  const handleClick = () => {
    const text = prompt('Введите текст');

    if (!text) {
      alert('Не указано название!');
      return;
    }

    const newNote: Note = {
      id: v4(),
      text,
      createdAt: new Date(),
    };
  
    setListStore((noteList) => {
      return [...noteList, newNote];
    });
  };

  return (
    <button onClick={handleClick}>
      Добавить новую заметку
    </button>
  );
};
