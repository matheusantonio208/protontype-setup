import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Day = styled.button`
  background: ${(props) => (props.checked ? '#00C48C' : '#EFEFEF')};
  font-size: 0.7143rem;
  padding: 0.2857rem 0.4286rem;
  width: 1.4286rem;
  height: 1.4286rem;
  margin-right: 0.2143rem;
  border: 0;
  border-radius: 0.2857rem;
  ${(props) =>
    props.checked
      ? css`
          color: #efefef;
        `
      : ''}
  ${(props) =>
    props.clickable
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
        `}
`;
