import { JSX } from 'solid-js/jsx-runtime';

import { noteModel } from '../../../entities/note';

export const SearchBox = () => {
  const handleChange: JSX.ChangeEventHandler<HTMLInputElement, InputEvent> = (
    event,
  ) => {
    noteModel.setNoteListSearchText(event.currentTarget.value);
  };

  return <input onInput={handleChange} />;
};
