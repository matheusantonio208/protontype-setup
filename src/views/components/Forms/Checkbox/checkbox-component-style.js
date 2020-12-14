import { Check } from '@rocketseat/unform';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled(Check)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0.5714rem 0;
  width: 1rem;
  height: 1rem;
  padding: 0.1429rem;
  background-clip: content-box;
  border: 0.1071rem solid #bbbbbb;
  border-radius: 0.2857rem;
  margin-right: 0.3571rem;

  &:checked {
    background-color: #f5194e;
    border: 0.1071rem solid #f5194e;
  }

  &:focus {
    outline: none !important;
  }
`;
