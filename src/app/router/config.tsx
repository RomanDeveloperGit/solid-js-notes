import { Component } from 'solid-js';

import { PageKey } from '#/shared/constants/pages';

import { NoteListPage } from '#/pages/note-list-page';
import { NoteDetailsPage } from '#/pages/note-details-page';

export const PAGE_KEY_COMPONENT: Record<PageKey, Component> = {
  [PageKey.NoteList]: NoteListPage,
  [PageKey.NoteDetails]: NoteDetailsPage,
};
