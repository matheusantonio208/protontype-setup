import styled, { css } from 'styled-components';

import { radius } from '#components/_global/global-vars.js';

const handleDirection = (direction) => {
  switch (direction) {
    case 'horizontal': {
      return css`
        button:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: 0;
        }
        button:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: 0;
          margin-left: 0;
        }
        button:last-child {
          border-top-right-radius: ${radius.default};
          border-bottom-right-radius: ${radius.default};
          margin-right: 0.214rem;
        }
      `;
    }
    case 'vertical': {
      return css`
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        button:first-child {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          margin-bottom: 0;
        }
        button:not(:first-child) {
          border-radius: 0;
          margin-top: 0;
          margin-bottom: 0;
        }
        button:last-child {
          border-bottom-right-radius: ${radius.default};
          border-bottom-left-radius: ${radius.default};
        }
      `;
    }
    default:
  }
  return direction;
};

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  ${(props) => handleDirection(props.direction)}
`;
