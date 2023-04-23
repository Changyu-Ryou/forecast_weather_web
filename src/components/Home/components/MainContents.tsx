import styled from '@emotion/styled';
import { ReactElement, useEffect, useRef } from 'react';
import { TalkType } from '../../../constants/messages';
import useFormContextHook from '../../../hooks/useFormContextHook';

import { View } from '../../common/Layout';
import AIIcon from '../../../assets/Image/artificial-intelligence.png';
import UserIcon from '../../../assets/Image/user.png';

import MessageContents from './MessageContents';

function MainContents(): ReactElement {
  const { watch } = useFormContextHook();
  const talksValue = watch('talks');

  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    viewRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [talksValue]);

  return (
    <View>
      {talksValue.map((talk: TalkType, idx: number) => {
        const isEval = idx % 2 === 0;
        return (
          <Message key={idx} isEval={isEval}>
            <AuthorWrapper>
              <AuthorImage src={talk.author === 'AI' ? AIIcon : UserIcon} />
            </AuthorWrapper>
            <MessageContents
              isAI={talk.author === 'AI'}
              message={talk.message}
              idx={idx}
              isLastMessage={talksValue.length === idx + 1}
              scrollToBottom={() => {
                viewRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              createdAt={talk.createdAt}
            />
          </Message>
        );
      })}
      <BottomRef ref={viewRef} />
    </View>
  );
}

const Message = styled.div<{ isEval: boolean }>`
  background-color: ${(props) => (props.isEval ? '#343541' : '#40414F')};
  width: 100%;
  height: auto;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

const AuthorWrapper = styled.div``;

const AuthorImage = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 5px;
`;
const BottomRef = styled.div`
  width: 100%;
  height: 1px;
`;

export default MainContents;
