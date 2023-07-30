import { createSignal, onCleanup, onMount } from 'solid-js';
import { PAGE_KEY_COMPONENT } from './config';
import { PageKey } from '../../shared/constants/pages';

const [currentRoute, setCurrentRoute] = createSignal<PageKey>(PageKey.NoteList);

// const [currentRoute, setCurrentRoute] = createSignal(<NoteListPage />);

export const Router = () => {
  const handlePopState = () => {
    if (typeof history.state?.pageKey !== 'number') return;

    setCurrentRoute(history.state.pageKey);
  };

  onMount(() => {
    window.addEventListener('popstate', handlePopState);
  });

  onCleanup(() => {
    window.removeEventListener('popstate', handlePopState);
  });

  return (
    <>
      {PAGE_KEY_COMPONENT[currentRoute()]}
    </>
  );
};
