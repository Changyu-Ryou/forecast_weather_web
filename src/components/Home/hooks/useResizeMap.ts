import { useCallback, useEffect, useMemo, useState } from 'react';
import { useControls } from 'react-zoom-pan-pinch';

interface Props {
  src: string;
  scaleUp?: boolean;
  resetHandler?: () => void;
}

const useResizeMap = ({ src, scaleUp = true, resetHandler }: Props) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [imageNaturalWidth, setImageNaturalWidth] = useState<number>(0);
  const [imageNaturalHeight, setImageNaturalHeight] = useState<number>(0);

  const imageScale = useMemo(() => {
    if (
      containerWidth === 0 ||
      containerHeight === 0 ||
      imageNaturalWidth === 0 ||
      imageNaturalHeight === 0
    )
      return 0;
    const scale = Math.min(
      containerWidth / imageNaturalWidth,
      containerHeight / imageNaturalHeight
    );
    return scaleUp ? scale : Math.max(scale, 1);
  }, [scaleUp, containerWidth, containerHeight, imageNaturalWidth, imageNaturalHeight]);

  const [prevWidth, setPrevWidth] = useState<number>();

  const handleResize = useCallback(() => {
    //세로 height 변경시에는 동작하지 않도록 한 이유는, 앱 에서 하단 배너가 올라왔다 내려갔다하면서 포커스를 init하는 버그가 있기 때문.
    if (window.innerWidth !== prevWidth) {
      if (container !== null) {
        const rect = container.getBoundingClientRect();
        setContainerWidth(rect.width);
        setContainerHeight(rect.height);
      } else {
        setContainerWidth(0);
        setContainerHeight(0);
      }
      setPrevWidth(window.innerWidth);
    }
  }, [container, prevWidth]);

  useEffect(() => {
    handleResize();
    resetHandler?.();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, resetHandler]);

  const handleImageOnLoad = (image: HTMLImageElement) => {
    setImageNaturalWidth(image.naturalWidth);
    setImageNaturalHeight(image.naturalHeight);
  };

  useEffect(() => {
    const image = new Image();
    image.onload = () => handleImageOnLoad(image);
    image.src = src;
  }, [src]);

  return {
    setContainer,
    imageScale,
    containerWidth,
    containerHeight,
  };
};

export default useResizeMap;
