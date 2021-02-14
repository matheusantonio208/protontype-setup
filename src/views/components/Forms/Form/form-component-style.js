import { Form, Input } from '@rocketseat/unform';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { color } from '#pages/_global/global-vars.js';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 2.1429rem;
  input {
    border: 0;
    border-radius: 0.2857rem;
    height: 3.1429rem;
    padding: 0 1.0714rem;
    margin: 0 0 0.7143rem;

    &::placeholder {
      color: #98a6ad;
    }
  }
  a {
    margin-top: 1.0714rem;
    font-size: 1.142rem;
    text-align: center;
  }
`;

export const InputField = styled(Input)`
  ${(props) =>
    props.correct &&
    css`
      border: 1px solid ${transparentize(0.6, color.primary)}!important;
      box-shadow: 0 0 10px 0 ${transparentize(0.6, color.primary)};
      color: ${color.primary} !important;

      &::placeholder {
        color: ${color.primary} !important;
      }
    `}

  ${(props) =>
    props.wrong &&
    css`
      border: 1px solid ${transparentize(0.6, color.danger)}!important;
      box-shadow: 0 0 10px 0 ${transparentize(0.6, color.danger)};
      color: ${color.danger};

      &::placeholder {
        color: ${color.danger} !important;
      }
    `}

    &[type='password'] {
    font-size: 24px;
  }
  &[type='password']::placeholder {
    font-size: 1rem;
  }
`;
