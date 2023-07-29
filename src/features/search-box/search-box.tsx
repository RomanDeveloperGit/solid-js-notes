import { JSX } from 'solid-js/jsx-runtime';
import { noteModel } from '../../entities/note';
import { createMemo } from 'solid-js';

export const SearchBox = () => {
  const handleChange: JSX.ChangeEventHandler<HTMLInputElement, InputEvent> = (
    event,
  ) => {
    console.log(event.currentTarget.value);
    noteModel.setNoteListSearchText(event.currentTarget.value);
  };

  return (
    <input onInput={handleChange} />
  );
};
