import useVisualViewPortFocusInput, {
  VisualViewPortFocusInputProps,
} from '../../../hooks/useVisualViewPortFocusInput';

import styled from '@emotion/styled';
import React, {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import AsyncBoundary from '../../../../components/common/AsyncBoundary/AsyncBoundary';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  padding?: string;
  appendTop?: ReactNode;
  className?: string;
  accessoryBar?: ReactNode;
};
export interface LayoutRefProps {
  layoutRef: MutableRefObject<HTMLDivElement | null>;
  setViweportInput: (props: VisualViewPortFocusInputProps) => void;
  internalRef?: MutableRefObject<HTMLDivElement | null>;
}

const Layout = forwardRef((props: Props, ref: ForwardedRef<LayoutRefProps>) => {
  const { children, padding, ...res } = props;
  const internalRef = React.useRef<HTMLDivElement>(null);
  const [viewportInput, setViweportInput] = useState<VisualViewPortFocusInputProps>({});

  // input focus시 viewport에 맞춰서 스크롤 되도록 하는 hook
  useVisualViewPortFocusInput(viewportInput);

  const controls = useMemo(
    () => ({ layoutRef: internalRef, setViweportInput, internalRef }),
    [internalRef]
  );
  useImperativeHandle(ref, () => ({ ...controls }));

  return (
    <ViewLayoutWrapper ref={internalRef} {...res} className="view-layout">
      {props.appendTop && (
        <AsyncBoundary>
          <BottomWrapper ref={internalRef} className={'layer-bottom'} id="layer-bottom">
            {props.appendTop}
          </BottomWrapper>
        </AsyncBoundary>
      )}
      <ContentsSection padding={padding}>{children}</ContentsSection>
      {props.accessoryBar && (
        <AsyncBoundary>
          <BottomWrapper ref={internalRef} className={'layer-bottom'} id="layer-bottom">
            {props.accessoryBar}
          </BottomWrapper>
        </AsyncBoundary>
      )}
    </ViewLayoutWrapper>
  );
});

const BottomWrapper = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;

export const AccessoryBar = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;

const ViewLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const ContentsSection = styled.div<{ padding?: string }>`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;
  padding: ${({ padding }) => padding};
`;

const LayoutWrapper = styled.div<{ padding?: string }>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  padding: ${({ padding }) => padding};
`;

export { Layout, LayoutWrapper };
