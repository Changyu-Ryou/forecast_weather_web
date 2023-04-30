import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { API_BASE_URL, fetchInstance } from './base';

export type QuestionProps = {
  deviceId: string;
  question: string;
};

export type QuestionResponse = {
  success: boolean;
  data?: {
    lottoQnA?: { deviceId: string; _id: string; question: string; answer: string };
  };
};

const postLottoQuestionPath = `${API_BASE_URL}/lotto/question`;

export const fetchPostLottoQuestion = async (req: QuestionProps) => {
  const result = await fetchInstance().post(postLottoQuestionPath, req);
  return result.data;
};

export const usePostLottoQuestion = () =>
  useMutation<QuestionResponse, AxiosError, QuestionProps>(fetchPostLottoQuestion);
