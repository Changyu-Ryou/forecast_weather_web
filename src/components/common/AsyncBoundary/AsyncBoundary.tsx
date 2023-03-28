import {
  ComponentProps,
  forwardRef,
  Ref,
  Suspense,
  SuspenseProps,
  useImperativeHandle,
  useRef,
} from 'react';

import { ErrorBoundary, ErrorBoundaryProps } from 'react-error-boundary';

type Props = {
  suspense?: Omit<SuspenseProps, 'fallback'>;
  errorBoundary?: Omit<ErrorBoundaryProps, 'fallback'>;
  rejectedFallback?: ComponentProps<typeof ErrorBoundary>['fallback'];
  pendingFallback?: ComponentProps<typeof Suspense>['fallback'];
  children: ComponentProps<typeof Suspense>['children'];
};

interface ResetRef {
  reset?(): void;
}

const AsyncBoundary = forwardRef(
  (
    { pendingFallback, rejectedFallback, children, ...errorBoundaryProps }: Props,
    resetRef: Ref<ResetRef>
  ) => {
    const ref = useRef<ErrorBoundary | null>(null);

    useImperativeHandle(resetRef, () => ({
      reset: () => ref.current?.resetErrorBoundary(),
    }));

    return (
      <ErrorBoundary
        ref={ref}
        {...errorBoundaryProps}
        fallback={(rejectedFallback ?? <></>) as any}
      >
        <Suspense fallback={pendingFallback ?? <></>}>{children}</Suspense>
      </ErrorBoundary>
    );
  }
);

export default AsyncBoundary;
