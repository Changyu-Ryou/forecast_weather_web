import { useMutation } from 'react-query';
import { API_BASE_URL, fetchInstance } from './base';

export type RegisterUserProps = {
  deviceId: string;
  goal: string;
};

export type RegisterUserResponse = {
  success: boolean;
  data?: {
    user?: { deviceId: string; _id: string };
  };
};

const putUserGoalPath = `${API_BASE_URL}/user/goal`;

export const fetchPutUserGoal = async (req: RegisterUserProps) => {
  const result = await fetchInstance().put(putUserGoalPath, req);
  return result.data;
};

export const usePutUserGoal = () => {
  return useMutation<RegisterUserResponse, Error, RegisterUserProps>(fetchPutUserGoal);
};
