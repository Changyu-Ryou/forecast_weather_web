import styled from '@emotion/styled';

import React, { ReactElement, useCallback } from 'react';
import { AllQuotesList, QuoteCardType, QuoteType } from '../../assets/data';
import useFormContextHook from '../../hooks/useFormContextHook';
import { useFlow } from '../../stackflow';
import { Button } from '../common/Button';
import { View } from '../common/Layout';
import { Spacing } from '../common/Spacing';
import { Segment } from './Segment';

function MyInfoContents(): ReactElement {
  const { pop, push } = useFlow();
  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  const { watch } = useFormContextHook();
  const userData = watch('userData');
  const storedQuotes = watch('storedQuotes') || [];
  const storedCards = watch('storedCards') || [];

  const renderQuotes = useCallback(() => {
    if (storedQuotes.length === 0) {
      return (
        <EmptyText>
          저장된 한마디가 없습니다.
          <Spacing height={20} />
          <Button
            onClick={() => pop({ animate: true })}
            style={{
              width: 'auto',
              padding: '10px 20px',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '140%',
            }}
          >
            한마디 보러가기
          </Button>
        </EmptyText>
      );
    }
    return storedQuotes.map(
      (
        quetes: {
          category: string;
          quote: string;
          author: string;
        },
        i: number
      ) => {
        const filteredQuotes: QuoteType[] = AllQuotesList.filter(
          (d) => JSON.stringify(d) === JSON.stringify(quetes)
        );
        return filteredQuotes.map((el) => (
          <QuoteItem key={el.quote + i}>
            {el.quote} -{el.author}
          </QuoteItem>
        ));
      }
    );
  }, []);

  const renderCards = useCallback(() => {
    if (storedCards.length === 0) {
      return <EmptyText>한마디 카드는 매주 월요일에 도착해요</EmptyText>;
    }
    return (
      <>
        <Spacing height={24} />
        <StoreCardLayout>
          {storedCards.map(({ image }: QuoteCardType, i: number) => {
            return (
              <CardImage
                src={image}
                key={i}
                onClick={() => {
                  push('ArriveCardPage', { id: 30 });
                }}
              />
            );
          })}
        </StoreCardLayout>
      </>
    );
  }, []);

  return (
    <View>
      <HeaderWrapper>
        <Title>목표</Title>

        {userData?.goal && (
          <>
            <Spacing height={8} />
            <GoalText>{userData?.goal}</GoalText>
          </>
        )}

        <Spacing height={16} />
        <EditGoalBtn onClick={() => push('BottomSheet/EditGoalBottomSheet', {})}>
          {userData?.goal ? '목표 수정' : '목표 추가'}
        </EditGoalBtn>
      </HeaderWrapper>
      <Divider height={8} />
      <StoreSection>
        <Title>저장</Title>
        <Spacing height={16} />
        <Segment selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <TabWrapper>{selectedTab === 0 ? renderQuotes() : renderCards()}</TabWrapper>
      </StoreSection>
    </View>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #1f2023;
`;

const GoalText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
`;

const EditGoalBtn = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 4px;
  background: #1f2023;
  border-radius: 8px;
  width: 100%;
`;

const Divider = styled.div<{ height: number }>`
  min-height: ${({ height }) => height}px;
  height: ${({ height }) => height}px;
  width: 100%;
  background: #f3f3f4;
`;

const StoreSection = styled.div`
  width: 100%;
  padding: 24px 20px;
`;

const TabWrapper = styled.div`
  padding: 0;
`;

const EmptyText = styled.div`
  margin-top: 80px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #1f2023;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuoteItem = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #1f2023;
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #f3f3f4;
  }
`;

const StoreCardLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 8px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  background: #eff0f2;
  border-radius: 16px;

  overflow: hidden;
`;

export default MyInfoContents;
