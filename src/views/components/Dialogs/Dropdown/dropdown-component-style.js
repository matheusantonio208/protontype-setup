import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { color, radius, zindex } from '#components/_global/global-vars.js';

export const Container = styled.div`
  position: absolute;
  ${(props) =>
    props.visible === true
      ? css`
          display: inline-block;
        `
      : css`
          display: none;
        `};
`;

export const DropdownMenu = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 100%;
  left: 0;
  z-index: ${zindex.dropdown};
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-color: ${color.white};
  background-clip: padding-box;
  border-radius: ${radius.default};

  a {
    display: block;
    width: 100%;
    padding: 8px 20px;
    clear: both;
    font-weight: normal;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  a:hover,
  a:focus {
    text-decoration: none;
    color: ${color.dark_grey}!important;
    background-color: ${lighten(0.01, color.light)};
    cursor: pointer;
  }
  a:disabled {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
  }

  div.dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
  }
`;
