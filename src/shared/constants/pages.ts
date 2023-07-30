export enum PageKey {
  NoteList,
  NoteDetails,
}

export const PATH_GENERATOR = {
  [PageKey.NoteList]: () => '/',
  [PageKey.NoteDetails]: (id: string) => `/note/${id}`,
};
