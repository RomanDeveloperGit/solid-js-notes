import { type Component } from 'solid-js';

import { Router } from './router';

import { init } from './init';

// Добавить собачку на импорт
// можно JSX засунуть в сигнал? - МОЖНО.

export const App: Component = () => {
  return <Router />;
};

init();
