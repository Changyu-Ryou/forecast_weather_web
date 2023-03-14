import styled from '@emotion/styled';
import React, { ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Spacing } from '../../../common/Spacing';
import { ItemType } from '../Markers/RestaurantMarkers';
import NaverMapIcon from '../../../../assets/Icon/naver_map_icon.png';
import KakaoMapIcon from '../../../../assets/Icon/kakao_map_icon.png';
import ReviewStarIcon from '../../../../assets/Icon/review_star.png';
import { openKakaoMap, openNaverMap } from '../../../../utils/deeplink';

function DefaultPlaceInfoSection(): ReactElement {
  const { watch } = useFormContext();
  const selectedItemValue: ItemType | undefined = watch('selectedItem');

  // 네이버 평점
  const naverReviewScore = useMemo(() => {
    if (!selectedItemValue?.naver_review_score) return;
    if (!selectedItemValue.naver_review_score.includes('.'))
      return `${selectedItemValue.naver_review_score}.`.padEnd(4, '0');
    return selectedItemValue?.naver_review_score?.padEnd(4, '0');
  }, [selectedItemValue?.naver_review_score]);

  // 카카오 평점
  const kakaoReviewScore = useMemo(() => {
    if (!selectedItemValue?.kakao_score) return;
    if (!selectedItemValue.kakao_score.includes('.'))
      return `${selectedItemValue.kakao_score}.`.padEnd(4, '0');
    return selectedItemValue?.kakao_score?.padEnd(4, '0');
  }, [selectedItemValue?.kakao_score]);

  // 네이버 리뷰 수
  const naverReviewCount = useMemo(() => {
    const visitorReviewCount = Number(
      selectedItemValue?.naver_visitor_review_count?.replace(',', '') ?? 0
    );
    const blogReviewCount = Number(
      selectedItemValue?.naver_blog_review_count?.replace(',', '') ?? 0
    );
    return visitorReviewCount + blogReviewCount;
  }, [selectedItemValue?.naver_blog_review_count, selectedItemValue?.naver_visitor_review_count]);

  // 카카오 리뷰 수
  const kakaoReviewCount = useMemo(() => {
    return Number(selectedItemValue?.kakao_review_count?.replace(',', '') ?? 0);
  }, [selectedItemValue?.kakao_review_count]);

  return (
    <>
      <Category>{selectedItemValue?.category}</Category>
      <Spacing height={3} />
      <Title>{selectedItemValue?.title}</Title>
      <Spacing height={11} />
      <ReviewWrapper>
        {/* 네이버 평점/리뷰 */}
        <ReviewRow onClick={() => openNaverMap(selectedItemValue?.naver_map_url ?? '')}>
          <IconImage src={NaverMapIcon} />
          <Spacing height={1} width={9} />
          <ReviewStarIconImage src={ReviewStarIcon} />
          <Spacing height={1} width={6} />
          {selectedItemValue?.naver_review_score && (
            <ReviewText>
              {naverReviewScore}/<span className="default">5</span>
            </ReviewText>
          )}
          {naverReviewCount && (
            <>
              {selectedItemValue?.naver_review_score && <ReviewText className="bar">|</ReviewText>}
              <ReviewText className="review_count">
                리뷰 {naverReviewCount.toLocaleString()}개
              </ReviewText>
            </>
          )}
        </ReviewRow>
        <Spacing height={6} />
        {/* 카카오 평점/리뷰 */}
        <ReviewRow onClick={() => openKakaoMap(selectedItemValue?.kakao_detail_url ?? '')}>
          <IconImage src={KakaoMapIcon} />
          <Spacing height={1} width={9} />
          <ReviewStarIconImage src={ReviewStarIcon} />
          <Spacing height={1} width={6} />
          {kakaoReviewScore && (
            <ReviewText>
              {kakaoReviewScore}/<span className="default">5</span>
            </ReviewText>
          )}
          {kakaoReviewCount && (
            <>
              {selectedItemValue?.kakao_score && <ReviewText className="bar">|</ReviewText>}
              <ReviewText className="review_count">
                리뷰 {kakaoReviewCount.toLocaleString()}개
              </ReviewText>
            </>
          )}
        </ReviewRow>
      </ReviewWrapper>
    </>
  );
}

export default DefaultPlaceInfoSection;

const Category = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #942528;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const ReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ReviewRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const IconImage = styled.img`
  width: 17px;
  height: 17px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

const ReviewStarIconImage = styled.img`
  width: 14px;
  height: 14px;
`;

const ReviewText = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: 0.05em;

  .default {
    color: #777777;
  }

  &.review_count {
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    color: #777777;
  }
  &.bar {
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    color: #777777;
    margin: 0 8px;
  }
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;

  width: 100%;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
