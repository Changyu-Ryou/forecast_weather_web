import styled from '@emotion/styled';
import { ReactElement, useEffect, useRef } from 'react';
import { Spacing } from '../common/Spacing';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import { Virtual, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { AllQuotesList, QuoteType } from '../../assets/data';
import { useActivity } from '@stackflow/react';
import useFormContextHook from '../../hooks/useFormContextHook';
import { CustomTooltip } from '../common/CustomToolTip';
import { useStorage } from '../../hooks/useStorage';

// install Virtual module

const QuotesCarousel = () => {
  const swiperRef = useRef<any>(null);
  const [slideIndex, setSlideIndex] = useStorage('slideIndex', 0);

  useEffect(() => {
    swiperRef?.current.slideTo(slideIndex, 0);
  }, [slideIndex]);

  const { isTop } = useActivity();

  const { watch, setValue } = useFormContextHook();
  const clickedLike = watch('clickedLike');
  const storedQuotes = watch('storedQuotes') || [];

  const showedSwipeUpOnboard = watch('showedSwipeUpOnboard');

  const renderLikeIcon = (children: ReactElement) => {
    if (clickedLike === false && showedSwipeUpOnboard === true) {
      return (
        <CustomTooltip
          TransitionProps={{ timeout: 600 }}
          placement="top"
          title={
            <span
              onClick={() => {
                setValue('clickedLike', true);
              }}
            >
              한마디를 기억하고 싶다면
              <br />
              저장 버튼을 눌러보세요
            </span>
          }
          open={!clickedLike && isTop}
          arrow
        >
          {children}
        </CustomTooltip>
      );
    }
    return children;
  };

  return (
    <Swiper
      onSwiper={(core) => (swiperRef.current = core)}
      onSlideChange={(swiper) => {
        setSlideIndex(swiper.activeIndex);
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
      direction={'vertical'}
      modules={[Virtual, Pagination]}
      virtual
    >
      {AllQuotesList.map((slideContent, index) => {
        const indexOfStoredQuotes = storedQuotes?.findIndex((el: QuoteType) => {
          return el.author === slideContent.author;
        });

        return (
          <SwiperSlide
            key={slideContent.category + index}
            virtualIndex={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Wrapper>
              <ContentsWrapper>
                <QuotesWrapper>{slideContent.quote}</QuotesWrapper>
                <Spacing height={20} />
                <AuthorWrapper>- {slideContent.author} -</AuthorWrapper>
              </ContentsWrapper>
              <FeedbackBox
                onClick={() => {
                  setValue('clickedLike', true);
                }}
              >
                {renderLikeIcon(
                  indexOfStoredQuotes !== -1 ? (
                    <FavoriteOutlinedIcon
                      onClick={() => {
                        storedQuotes.splice(indexOfStoredQuotes, 1);
                        setValue('storedQuotes', storedQuotes);
                      }}
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      onClick={() => {
                        setValue('storedQuotes', [...storedQuotes, slideContent]);
                      }}
                    />
                  )
                )}
                <BackgroudImage />
              </FeedbackBox>
            </Wrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default QuotesCarousel;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: auto;
`;

const QuotesWrapper = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  word-break: keep-all;
  text-align: center;
  padding: 0 36px;
`;

const AuthorWrapper = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #6f7580;
`;

const FeedbackBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 40px 0;
`;

const BackgroudImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 99%;
  height: 99%;
  z-index: -1;
`;
