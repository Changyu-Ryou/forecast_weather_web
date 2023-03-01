import styled from '@emotion/styled';
import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { openYoutube } from '../../../../utils/deeplink';
import YoutubePlayButton from './YoutubePlayButton';

interface Props {
  index?: number;
  youtubeUrl?: string;
}

function YoutubeWrapper({ index, youtubeUrl }: Props): ReactElement {
  const [width, setWidth] = useState(window.innerWidth - 60 + 'px');
  const [youtubeReady, setYoutubeReady] = useState<boolean | undefined>(undefined);
  const videoId = useMemo(() => {
    if (!youtubeUrl) return '';
    const search = youtubeUrl.split('?')[1];
    const params = new URLSearchParams(search);
    return params.get('v') ?? '';
  }, [youtubeUrl]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // youtube libray의 width를 100%로 해도 양옆이 남아 직접 계산해서 넣어줌
    const width = ref.current?.getBoundingClientRect().width;
    setWidth(`${width}px`);
  }, []);

  useEffect(() => {
    setYoutubeReady(undefined);
  }, [youtubeUrl]);

  return (
    <Wrapper ref={ref}>
      <Thumbnail
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        onClick={() => {
          openYoutube(videoId);
        }}
      />
      {youtubeReady === false && <YoutubePlayButton />}
      {youtubeReady !== false && (
        <YouTubeWrapper isReady={youtubeReady}>
          <YouTube
            id={index?.toString() ?? ''}
            videoId={videoId}
            opts={{
              width: width,
              height: 'auto',
            }}
            onReady={(e) => {
              setYoutubeReady(e.target.getPlayerState() > 0);
            }}
            onError={() => {
              setYoutubeReady(false);
            }}
          />
        </YouTubeWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  overflow: hidden;

  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  background-color: white;
`;

const YouTubeWrapper = styled.div<{ isReady: boolean | undefined }>`
  width: 100%;
  height: 100%;
  opacity: ${({ isReady }) => (isReady ? 1 : 0)};
  pointer-events: ${({ isReady }) => (isReady ? 'auto' : 'none')};
  z-index: ${({ isReady }) => (isReady ? 999 : -1)};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export default YoutubeWrapper;
