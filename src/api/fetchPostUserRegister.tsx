import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { API_BASE_URL, fetchInstance } from './base';

export type RegisterUserProps = {
  deviceId: string;
};

export type RegisterUserResponse = {
  success: boolean;
  data?: {
    user?: { deviceId: string; _id: string };
  };
};

const postUserRegisterPath = `${API_BASE_URL}/user/register`;

export const fetchPostUserRegister = async (req: RegisterUserProps) => {
  const result = await fetchInstance().post(postUserRegisterPath, req);
  return result.data;
};
