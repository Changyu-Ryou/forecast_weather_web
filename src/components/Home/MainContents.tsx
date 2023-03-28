import styled from '@emotion/styled';
import { ReactElement, useState } from 'react';
import { Spacing } from '../common/Spacing';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { CustomTooltip } from '../common/CustomToolTip';
import Fade from '@mui/material/Fade';
import { View } from '../common/Layout';
import { useActivity } from '@stackflow/react';
function MainContents(): ReactElement {
  // const changeFontFamily = () => {
  //   document.body.style.fontFamily = 'KCCChassam';
  // };

  const { isTop } = useActivity();
  const [like, setLike] = useState(false);
  const [showLikeTooltip, setShowLikeTooltip] = useState(true);

  return (
    <View>
      <ContentsWrapper>
        <QuotesWrapper>
          큰 재주를 가졌다면 근면은 그 재주를 더 낫게 해줄 것이며 보통의 능력밖에 없다면 근면은
          부족함을 보충해 줄 것이다
        </QuotesWrapper>
        <Spacing height={20} />
        <AuthorWrapper>- 토마스 에디슨 -</AuthorWrapper>
      </ContentsWrapper>
      <FeedbackBox
        onClick={() => {
          setShowLikeTooltip(false);
        }}
      >
        <CustomTooltip
          TransitionProps={{ timeout: 600 }}
          placement="top"
          title={
            <span
              onClick={() => {
                setShowLikeTooltip(false);
              }}
            >
              하트 눌러서 저장해봐라
            </span>
          }
          open={!!showLikeTooltip && isTop}
          arrow
        >
          {like ? (
            <FavoriteOutlinedIcon
              onClick={() => {
                setLike(!like);
              }}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              onClick={() => {
                setLike(!like);
              }}
            />
          )}
        </CustomTooltip>
      </FeedbackBox>
    </View>
  );
}

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  flex: 1;
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
  padding: 0 36px;

  text-align: center;

  color: #666666;
`;

const FeedbackBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 40px 0;
`;

export default MainContents;
