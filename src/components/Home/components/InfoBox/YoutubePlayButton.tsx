import styled from '@emotion/styled';

function YoutubePlayButton() {
  return <Button className="play" />;
}

const Button = styled.div`
  pointer-events: none;
  transform: scale(0.45);

  background: red;
  border-radius: 50% / 10%;
  color: #ffffff;
  font-size: 2em; /* change this to change size */
  height: 3em;
  margin: 20px auto;
  padding: 0;
  position: relative;
  text-align: center;
  text-indent: 0.1em;
  transition: all 150ms ease-out;
  width: 4em;
  z-index: 9;

  &::before {
    background: inherit;
    border-radius: 5% / 50%;
    bottom: 9%;
    content: '';
    left: -5%;
    position: absolute;
    right: -5%;
    top: 9%;
  }

  &::after {
    border-style: solid;
    border-width: 1em 0 1em 1.732em;
    border-color: transparent transparent transparent rgba(255, 255, 255, 1);
    content: ' ';
    font-size: 0.75em;
    height: 0;
    margin: -1em 0 0 -0.75em;
    top: 50%;
    position: absolute;
    width: 0;
  }
`;

export default YoutubePlayButton;
