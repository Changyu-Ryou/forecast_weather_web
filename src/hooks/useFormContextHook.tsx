import { FieldValues, useFormContext, UseFormSetValue } from 'react-hook-form';
import { storage } from './useStorage';

const useFormContextHook = () => {
  const { setValue: originalSetValue, ...rest } = useFormContext();

  const setValue: UseFormSetValue<FieldValues> = (key: string, data: any) => {
    storage(key).set(data);
    return originalSetValue(key, data);
  };
  return { setValue, ...rest };
};

export default useFormContextHook;
