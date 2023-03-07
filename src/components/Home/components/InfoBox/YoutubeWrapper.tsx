import styled from '@emotion/styled';
import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import YouTube from 'react-youtube';
import { openYoutube } from '../../../../utils/deeplink';
import YoutubePlayButton from './YoutubePlayButton';

interface Props {
  index?: number;
  youtubeUrl?: string;
}

const youTubeRatio = 280 / 150;

function YoutubeWrapper({ index, youtubeUrl }: Props): ReactElement {
  const [width, setWidth] = useState(window.innerWidth);
  const [youtubeReady, setYoutubeReady] = useState<boolean | undefined>(undefined);
  const { setValue } = useFormContext();
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
    width && setWidth(width);
  }, []);

  useEffect(() => {
    setYoutubeReady(undefined);
  }, [youtubeUrl]);

  return (
    <Wrapper ref={ref} width={width}>
      {videoId && (
        <Thumbnail
          width={width}
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          onClick={() => {
            setValue('infoBoxHeight', '100%');
            openYoutube(videoId);
          }}
        />
      )}
      {youtubeReady === false && <YoutubePlayButton />}
      {youtubeReady !== false && (
        <YouTubeWrapper isReady={youtubeReady}>
          <YouTube
            id={index?.toString() ?? ''}
            videoId={videoId}
            opts={{
              width: '100%',
              height: (width / youTubeRatio).toFixed(0) + 'px',
            }}
            onReady={(e) => {
              setYoutubeReady(e.target.getPlayerState() > 0);
            }}
            onError={() => {
              setYoutubeReady(false);
            }}
            onPlay={() => {
              setValue('infoBoxHeight', '100%');
            }}
          />
        </YouTubeWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ width: number }>`
  width: calc(100% - 20px);
  margin: 0 10px;
  height: ${({ width }) => (width / youTubeRatio).toFixed(0) + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  box-sizing: border-box;
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
  z-index: ${({ isReady }) => (isReady ? 99 : -1)};
`;

const Thumbnail = styled.div<{ src: string; width: number }>`
  width: 100%;
  height: ${({ width }) => (width / youTubeRatio).toFixed(0) + 'px'};
  object-fit: cover;
  position: absolute;
  background-image: ${({ src }) => `url(${src})`};

  top: 0;

  left: 50%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export default YoutubeWrapper;
