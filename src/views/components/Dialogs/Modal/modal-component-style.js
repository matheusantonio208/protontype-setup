import styled from 'styled-components';

import { zindex } from '#pages/_global/global-vars.js';

export const Container = styled.div`
  backdrop-filter: blur(0.3571rem);
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: 2s;
  z-index: ${zindex.modal};

  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  div {
    background: #fff;
    border-radius: 0.2857rem;
    width: 28.5714rem;

    & > button {
      padding: 24px 24px 12px 24px;
      border: 0;
      background: 0;
      position: relative;
      top: -0.7143rem;
      right: -0.7143rem;
      float: right;

      &:focus {
        outline: 0;
        border: 0;
      }
    }
  }

  header {
    border-bottom: 1px solid #eee;
    padding: 24px 24px 12px 24px;
  }
  p {
    padding: 24px 24px 12px 24px;
  }
  footer {
    display: flex;
    flex-direction: row-reverse;
    border-top: 1px solid #eee;
    padding: 24px 24px 12px 24px;
  }
`;
