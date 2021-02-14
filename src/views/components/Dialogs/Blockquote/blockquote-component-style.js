import styled from 'styled-components';

import { color } from '#pages/_global/global-vars.js';

export const Container = styled.blockquote`
  background: #f9f9f9;
  border-left: 5px solid #999;
  margin: 1.5em 10px;
  padding: 1em;
  quotes: '“' '”' '‘' '’';

  &:before {
    color: ${color.primary};
    font-size: 32px;
    content: open-quote;
  }

  footer {
    margin-top: 0.5em;
    padding: 0;
    color: #777;
    text-align: left;
    font-style: italic;
  }

  footer:before {
    content: '— ';
  }
`;
