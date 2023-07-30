import { generateRandomTextList } from '#/shared/lib/generate-random-text-list';

import { noteModel } from '#/entities/note';

export const GenerateRandomNoteListButton = () => {
  const handleClick = () => {
    const count = Number(prompt('Введите количество рандомных заметок'));
    if (!count) return;

    const generatedRandomTextList = generateRandomTextList(count);
    noteModel.createNoteList(generatedRandomTextList);
  };

  return <button onClick={handleClick}>Сгенерировать рандомные заметки</button>;
};
