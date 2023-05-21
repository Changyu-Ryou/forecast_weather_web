import { useActivityParams } from '@stackflow/react';

export interface ActivityPathParams {
  groupId: string;
  postId: string;
  commentId: string;
  roomId: string;
  challengeId?: string;
  meetupId: string;
  userId: string;
  query: string;
  shrineName: string;
}

export const usePathParams = (): ActivityPathParams => {
  return useActivityParams<ActivityPathParams>();
};
