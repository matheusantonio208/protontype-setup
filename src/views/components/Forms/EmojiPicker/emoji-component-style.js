import styled from 'styled-components';

export const Container = styled.div`
  display: inline;
  vertical-align: baseline;
  margin-right: 0.3571rem;
  .select-emoji {
    content: '';
    width: 1.0714rem;
    height: 1.0714rem;
    border: 0;
    border-radius: 50%;
  }

  .selected-emoji {
    appearance: none;
    border: 0;
    background: none;
  }
`;
export const EmojiPicker = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
`;
