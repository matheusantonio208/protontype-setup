import styled from 'styled-components';

import { color } from '#pages/_global/global-vars.js';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    color: ${color.primary};
    padding: 15px 15px;
    font-size: 1rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }

  p {
    padding: 15px;
  }
`;
