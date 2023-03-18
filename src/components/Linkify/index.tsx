import styled from '@emotion/styled';
import ReactLinkify from 'react-linkify';
import { openExternalLink } from '../../utils/link';

interface Props {
  children: React.ReactNode;
}

export const Linkify = ({ children }: Props) => (
  <ReactLinkify
    componentDecorator={(decoratedHref, decoratedText, key) => (
      <Link
        key={key + '_linkify'}
        href={decoratedHref}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          openExternalLink(decoratedHref);
        }}
      >
        {decoratedText}
      </Link>
    )}
  >
    {children}
  </ReactLinkify>
);

const Link = styled.a`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: underline;
  color: orange;
`;
