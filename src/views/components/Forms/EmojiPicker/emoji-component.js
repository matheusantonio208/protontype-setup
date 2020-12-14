import Picker from 'emoji-picker-react'; // https://www.npmjs.com/package/emoji-picker-react
import React, { useState } from 'react';

import { Container, EmojiPicker } from './emoji-component-style.js';

export default function EmojiComponent() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  function handlePickerVisible() {
    setPickerVisible(!pickerVisible);
  }

  return (
    <Container>
      {chosenEmoji ? (
        <button className="selected-emoji" onClick={handlePickerVisible}>
          {chosenEmoji.emoji}
        </button>
      ) : (
        <button className="select-emoji" onClick={handlePickerVisible}></button>
      )}
      <EmojiPicker visible={pickerVisible} className="emoji-picker">
        <Picker onEmojiClick={onEmojiClick} />
      </EmojiPicker>
    </Container>
  );
}
