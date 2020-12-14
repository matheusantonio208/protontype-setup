import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  bottom: 2.1429rem;
  right: 2.1429rem;
  width: ${(props) => props.width || '3.4286rem'};
  height: ${(props) => props.height || '3.4286rem'};
  border-radius: 1.1429rem;
  background: #00c48c;
  box-shadow: 0 0 0.7143rem 0 rgba(0, 196, 140, 0.65);

  border: 0;

  &:focus {
    outline: 0;
  }
`;
