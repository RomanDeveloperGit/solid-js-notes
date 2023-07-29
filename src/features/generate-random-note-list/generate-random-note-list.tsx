import { noteModel } from '../../entities/note';

import { generateRandomTextList } from './lib';

export const GenerateRandomNoteListButton = () => {
  const handleClick = () => {
    const count = Number(prompt('Введите количество рандомных заметок'));
    if (!count) return;

    const generatedRandomTextList = generateRandomTextList(count);
    noteModel.createNoteList(generatedRandomTextList);
  };

  return <button onClick={handleClick}>Сгенерировать рандомные заметки</button>;
};
