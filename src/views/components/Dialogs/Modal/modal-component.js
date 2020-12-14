import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa/index.js';

import { Container } from './modal-component-style.js';

export default function ModalComponent({ ...props }) {
  const [visible, setVisible] = useState([]);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container visible={visible}>
      <div>
        <button onClick={handleVisible}>
          <FaTimes color={'#cecece'} />
        </button>
        {props.children}
      </div>
    </Container>
  );
}
