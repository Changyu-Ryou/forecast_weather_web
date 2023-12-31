import { useActivityParams } from '@stackflow/react';

/*
 * 서비스에서 사용하는 QueryParams를 정의합니다.
 */

export interface ActivityQueryParams {
  from?: string;
  image?: string;
  quote?: string;
  author?: string;
  activeTabIdx?: string;
  isStoredCard?: string;
  position?: string;
}

export const useQueryParams = (): ActivityQueryParams => {
  return useActivityParams<ActivityQueryParams>();
};
