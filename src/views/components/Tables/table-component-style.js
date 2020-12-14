import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.7143rem;
  margin-top: -0.7143rem;
  margin-right: auto;
  margin-left: auto;

  th {
    text-align: center;
    border-bottom: 0.0714rem solid #eee;
    padding-bottom: 0.3571rem;
    color: #aaa;
    font-weight: normal;
  }

  tbody > tr {
    text-align: center;

    border-radius: 0.2857rem;
    box-shadow: 0 0 0 0.0714rem #eee;

    input[type='checkbox'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      width: 1rem;
      height: 1rem;
      padding: 0.1429rem;
      background-clip: content-box;
      border: 0.1071rem solid #bbbbbb;
      border-radius: 50%;
      margin-left: 1.0714rem;
      margin-right: 1.0714rem;

      &:checked {
        background-color: #f5194e;
        border: 0.1071rem solid #f5194e;
      }

      &:focus {
        outline: none !important;
      }
    }

    td {
      padding: 0.7143rem;
      vertical-align: middle;
    }
  }
`;
