import { type Component } from 'solid-js';

import { Note } from './entities/note';

// можно JSX засунуть в сигнал?

const App: Component = () => {
  return (
    <div>
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default App;
