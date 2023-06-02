import { useActivityParams } from '@stackflow/react';

export interface ActivityPathParams {
  query: string;
  shrineName: string;
  caveName: string;
  korokName: string;
  position: string;
}

export const usePathParams = (): ActivityPathParams => {
  return useActivityParams<ActivityPathParams>();
};
