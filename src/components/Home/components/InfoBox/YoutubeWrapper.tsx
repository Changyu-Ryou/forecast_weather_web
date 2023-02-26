import styled from '@emotion/styled';
import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import YouTube from 'react-youtube';

interface Props {
  index?: number;
  youtubeUrl?: string;
}

function YoutubeWrapper({ index, youtubeUrl }: Props): ReactElement {
  const [width, setWidth] = useState(window.innerWidth - 60 + 'px');
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

  return (
    <Wrapper ref={ref}>
      <YouTube
        id={index?.toString()}
        videoId={videoId}
        opts={{
          width: width,
          height: 'auto',
        }}
        onError={(e) => console.log(e)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;

export default YoutubeWrapper;
