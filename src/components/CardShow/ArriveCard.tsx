import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import NormalFlippyCard, { InnerRefProps } from '../common/NormalFlippyCard';
import { Spacing } from '../common/Spacing';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useQueryParams } from '../../stackflow/hooks/useQueryParams';
import useActiveActivities from '../../stackflow/hooks/useActiveActivities';
import { useFlow } from '../../stackflow';
import { getPadssedMondayCount, isMondayToday } from '../../utils/dayUtil';
import useFormContextHook from '../../hooks/useFormContextHook';
import { cardQuotes } from '../../assets/data';
import React from 'react';

const ArriveCard = () => {
  const { watch } = useFormContextHook();
  const startDate = watch('startDate');
  const { quote, author, image, isStoredCard } = useQueryParams();
  const [clickedCard, setClickedCard] = useState(Boolean(isStoredCard) ?? false);
  const [opened, setOpened] = useState(false);

  const todaysCard = cardQuotes[getPadssedMondayCount(startDate)];

  const { pop, replace } = useFlow();

  const { isExistSpecificActivities } = useActiveActivities();

  useEffect(() => {
    const isMonday = isMondayToday();
    console.log(!isMonday, todaysCard);
    if (!quote && !isMonday) {
      replace('HomePage', {});
    }
  }, [quote, replace, todaysCard]);

  const cardQuote = {
    category: 'Card',
    image: image ?? todaysCard.image ?? '',
    quote: quote ?? todaysCard.quote,
    author: author ?? todaysCard.author,
  };

  const cardRef = React.useRef<InnerRefProps>(null);

  return (
    <PageWrapper>
      <Wrapper>
        {!clickedCard && (
          <>
            <Title>한마디 카드가 도착했어요</Title>
            <Spacing height={51} />
          </>
        )}
        <CardWrapper>
          <CardInnerWrapper clickedCard={clickedCard}>
            <NormalFlippyCard
              ref={cardRef}
              blockFlip={!clickedCard}
              onClick={() => {
                clickedCard && setOpened(true);
              }}
              quote={cardQuote}
              frontImage={image ?? todaysCard.image ?? ''}
            />
          </CardInnerWrapper>
        </CardWrapper>
        {clickedCard && (
          <>
            <Spacing height={20} />
            <ClickableCardText>
              카드를 눌러보세요 <ArrowDropUpIcon />
            </ClickableCardText>
          </>
        )}
      </Wrapper>
      <CheckCardButton>
        <CheckBtn
          onClick={() => {
            if (!clickedCard) {
              setClickedCard(true);
              return;
            }
            if (!opened) {
              cardRef.current?.getInnerRef()?.click();

              return;
            }
            const isExist = isExistSpecificActivities('MyPage');
            if (isExist) {
              pop();
              return;
            }
            replace('MyPage', { activeTabIdx: 1 });
          }}
        >
          {opened ? '카드 저장하기' : '카드 확인하기'}
        </CheckBtn>
      </CheckCardButton>
    </PageWrapper>
  );
};

export default ArriveCard;
const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.005em;
  color: #1f2023;
  padding: 24px;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardInnerWrapper = styled.div<{ clickedCard: boolean }>`
  width: ${({ clickedCard }) => {
    if (clickedCard) {
      return `calc(100% - 80px)`;
    }
    return `calc(100% - 180px)`;
  }};
  transition: all 0.15s ease-out;
`;

const CheckCardButton = styled.div`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckBtn = styled(Button)``;

const ClickableCardText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #4d525b;
`;
