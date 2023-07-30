import { createSignal, onCleanup, onMount } from 'solid-js';

import { PageKey } from '#/shared/constants/pages';

import { PAGE_KEY_COMPONENT } from './config';

const [currentPageKey, setCurrentPageKey] = createSignal<PageKey>(
  PageKey.NoteList,
);

export const Router = () => {
  const handlePopState = () => {
    if (typeof history.state?.pageKey !== 'number') return;

    setCurrentPageKey(history.state.pageKey);
  };

  onMount(() => {
    window.addEventListener('popstate', handlePopState);
  });

  onCleanup(() => {
    window.removeEventListener('popstate', handlePopState);
  });

  return <>{PAGE_KEY_COMPONENT[currentPageKey()]}</>;
};
