import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

const progressBarVariations = {
  info: css`
    background: #3172b7aa;
  `,
  success: css`
    background: #2e656aaa;
  `,
  error: css`
    background: #c53030aa;
  `,
};

const progressBar = keyframes`
  0% {
    right: 0;
    left: 0;
  }

  100% {
    right: 100%;
    left: 0;
  }
`;

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  overflow: hidden;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;

    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 6px;

    ${(props) => progressBarVariations[props.type || 'info']}

    animation: 2.4s ${progressBar} linear;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }
`;
