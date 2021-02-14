import { transparentize, darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

import { color } from '#pages/_global/global-vars.js';

const handleImagePosition = (position) => {
  switch (position) {
    case 'top':
      return css`
        img {
          order: -1;
        }
      `;
    case 'mid':
      return css`
        img {
          order: 0;
        }
      `;
    case 'left':
      return css`
        flex-direction: row;
        align-items: stretch;
        .position {
          width: 100%;
        }
        div {
          height: 66%;
        }
        img {
          order: -1;
        }
      `;
    case 'right':
      return css`
        flex-direction: row;
        align-items: stretch;
        .position {
          width: 100%;
        }
        div {
          height: 66%;
        }
        img {
          order: -1;
        }
      `;
    default:
  }
  return true;
};

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: ${(props) => props.maxWidth || null};
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #eef2f7;
  border-radius: 0.25rem;
  text-shadow: 0 0 1px ${color.white};
  transform: rotate(-0.0000000001deg);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s,
    box-shadow 0.2s;

  header {
    padding: 24px 24px 18px 24px;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 1px solid #eef2f7;
  }

  header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 0.75rem;
  }

  h4,
  h5,
  h6 {
    margin-bottom: 3px;
  }

  img {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
  }

  div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 24px;
  }

  footer {
    color: ${color.secondary};
    font-size: 12px;
    padding: 12px 24px 12px 24px;
    background-color: #fff;
    border-top: 1px solid #eee;
  }

  footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        box-shadow: 0 0 0.7143rem 0
          ${transparentize(
            typeof props.hover === 'boolean' ? 0 : 1 - props.hover,
            color[props.color],
          )};
      }
    `}

  ${(props) =>
    props.outline
      ? css`
          border: 0.0714rem solid ${color[props.color]};
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${color[props.color]};
          }
        `
      : css`
          background-color: ${lighten(0.15, color[props.color])};
          color: ${color.white};
          border: 1px solid ${darken(0.03, color[props.color])} !important;

          header {
            background-color: ${color[props.color]}!important;
            border-bottom: 1px solid ${darken(0.05, color[props.color])} !important;

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: ${color.white}!important;
            }
          }
          footer {
            background-color: ${color[props.color]}!important;
            color: ${color.white}!important;
            border-top: 1px solid ${darken(0.05, color[props.color])} !important;
          }
        `}

        ${(props) => handleImagePosition(props.image)}
`;
