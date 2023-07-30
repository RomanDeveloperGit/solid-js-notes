// @cross-import, но допустимо
import { PATH_GENERATOR, PageKey } from '../constants/pages';

export const getRedirectPageHandler = <T extends PageKey>(
  pageKey: T,
  ...args: Parameters<(typeof PATH_GENERATOR)[T]>
) => {
  // @ts-ignore
  const route = PATH_GENERATOR[pageKey](...args);

  return () => {
    history.pushState({ route, pageKey }, '', route);

    window.dispatchEvent(new Event('popstate'));
  };
};
