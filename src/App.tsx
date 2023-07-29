import { type Component } from 'solid-js';

import { noteModel } from './entities/note';
import { AddNoteButton } from './features/add-note';
import { NoteList } from './widgets/note-list';
import { listStore } from './entities/note/model';

// можно JSX засунуть в сигнал?

const App: Component = () => {
  const list = listStore();
  console.log(list);

  return (
    <div>
      <AddNoteButton />
      <NoteList list={listStore()} />
    </div>
  );
};

export default App;
