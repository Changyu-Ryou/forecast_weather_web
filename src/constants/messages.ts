export type TalkType = {
  author: 'AI' | 'USER';
  message: string;
  createdAt?: Date;
};

export const DEFAULT_TALKS: TalkType[] = [
  {
    author: 'AI',
    message:
      '안녕하세요! 저는 Chat Lotto AI라고 합니다. 로또번호 추첨을 도와드릴 수 있습니다. 어떻게 도와드릴까요?',
  },
];
