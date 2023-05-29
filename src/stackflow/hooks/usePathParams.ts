import { useActivityParams } from '@stackflow/react';

export interface ActivityPathParams {
  query: string;
  shrineName: string;
  caveName: string;
  position: string;
}

export const usePathParams = (): ActivityPathParams => {
  return useActivityParams<ActivityPathParams>();
};
