import { createContext, ReactNode, useContext, useMemo } from 'react';

import { useToggleNews } from '@features/toggle-news/model';

const initialState = {
  isNewsShown: false,
  toggleNewsShown: () => undefined,
};

interface INewsState {
  isNewsShown: boolean;
  toggleNewsShown: () => void;
}

export const NewsContext = createContext<INewsState>(initialState);
NewsContext.displayName = 'NewsContext';

export function useNewsContext() {
  return useContext(NewsContext);
}

interface INewsProviderProps {
  children: ReactNode;
}
export function NewsProvider(props: INewsProviderProps) {
  const { children } = props;
  const { isNewsShown, toggleNewsShown } = useToggleNews();

  const contextValue = useMemo(
    () => ({
      isNewsShown,
      toggleNewsShown,
    }),
    [isNewsShown, toggleNewsShown],
  );

  return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>;
}
