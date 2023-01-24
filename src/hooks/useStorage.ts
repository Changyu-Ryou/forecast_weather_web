import { useRef } from 'react';

export const useStorage = <T extends keyof Storage>(
  key: T,
  initData?: Storage[T]
): [Storage[T], (value: Storage[T], isReplace?: boolean) => void] => {
  const currentStorage = storage<T>(key);

  const initLocalStorageData = () => {
    const currentData = currentStorage.get();
    if (!currentData) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      currentStorage.set(initData);
      return initData;
    }
    return currentData;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dataRef = useRef<Storage[T]>(initLocalStorageData());

  const handleData = (value: Storage[T]): void => {
    dataRef.current = value;
    currentStorage.set(dataRef.current);
  };

  return [dataRef.current, handleData];
};

export const storage = <T extends keyof Storage>(key: T) => {
  const storageKey = `${STORAGE_KEY_SUFFIX}${key}`;

  const get = (): Storage[T] => {
    const value = localStorage.getItem(storageKey);

    return JSON.parse(value as string);
  };
  const set = (value: Storage[T]) => {
    if (value == undefined || value == null) {
      return localStorage.removeItem(storageKey);
    }

    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem(storageKey, stringifiedValue);
  };

  return { get, set };
};

const STORAGE_KEY_SUFFIX = 'dev_r/';

export interface Storage {
  [key: string]: any;
}
