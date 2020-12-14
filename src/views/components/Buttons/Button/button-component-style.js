import { darken, transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { color, radius } from '#components/_global/global-vars.js';

const handleSize = (size) => {
  switch (size) {
    case 'lg':
      return css`
        font-size: 1.2143rem !important;
        height: 3.142rem;
      `;
    case undefined:
      return css`
        height: 2.7rem;
      `;
    case 'sm':
      return css`
        height: 1.671rem;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      `;
    case 'block-lg':
      return css`
        font-size: 1.2143rem !important;
        display: block;
        width: 100%;
        height: 3.142rem;
      `;
    case 'block':
      return css`
        display: block;
        width: 100%;
        height: 2.7rem;
      `;
    default:
  }

  return size;
};

export const Button = styled.button`
  color: ${color.white};
  font-size: 0.8571rem;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: ${radius.default};
  padding: 0.375rem 0.75rem;
  margin: 0.214rem;

  text-shadow: 0 0 1px ${color.white};
  transform: rotate(-0.0000000001deg);

  font-size: 1rem;
  line-height: 1.5;
  color: ${color.white};
  font-weight: medium;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  user-select: none;

  transition: color 0.2s, background-color 0.2s, border-color 0.2s,
    box-shadow 0.2s;

  ${(props) =>
    props.outline
      ? css`
          background-color: transparent;
          border: 0.0714rem solid ${color[props.color]};
          color: ${color[props.color]};
          font-weight: normal;

          &:hover:not(:disabled):not(.disabled) {
            background-color: ${color[props.color]};
            color: ${
              props.color === 'grey' || props.color === 'light'
                ? color.dark_grey
                : color.white
            };
            };
          }
        `
      : css`
          background-color: ${color[props.color]};
          color: ${(props.color === 'grey' || props.color === 'light') &&
          color.dark_grey};
          box-shadow: 0 0 0.7143rem 0
            ${transparentize(0.25, color[props.color])};

          &:hover:not(:disabled):not(.disabled) {
            background-color: ${darken(0.06, color[props.color])};
          }
        `}

  &:focus {
    outline: 0;
    ${(props) => css`
      box-shadow: 0 0 0 0.214rem ${transparentize(0.55, color[props.color])};
    `}
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: spin 1s infinite linear;
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    `}

  &:disabled {
    opacity: 0.65;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  ${(props) =>
    props.dropdown &&
    css`
      svg,
      i {
        margin-left: 5px;
        transform: rotate(0deg);
      }
      div {
        top: ${handleSize(props.size)[0].slice(
          handleSize(props.size)[0].indexOf('height:') + 7,
          handleSize(props.size)[0].lastIndexOf('rem;') + 4,
        )};
      }

      &:focus {
        svg,
        i {
          animation: rotate_down 0.1s 1 linear;
          transform: rotate(90deg);

          @keyframes rotate_down {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(90deg);
            }
          }
        }
      }

      &:not(:focus) {
        svg,
        i {
          animation: rotate_down_to_left 0.1s 1 linear;
          transform: rotate(0deg);

          @keyframes rotate_down_to_left {
            0% {
              transform: rotate(90deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        }
      }
    `}

  ${(props) => handleSize(props.size)}
`;
