import { useCallback, useState } from 'react';

export interface IUseToggleTasks {
  isNewsShown: boolean;
  toggleNewsShown: () => void;
}

export function useToggleNews(): IUseToggleTasks {
  const [isNewsShown, setIsNewsShown] = useState<boolean>(false);

  const toggleNewsShown = useCallback(() => setIsNewsShown((prev) => !prev), []);

  return { isNewsShown, toggleNewsShown };
}
