import React from 'react';
import { FaPlus } from 'react-icons/fa/index.js';

import { Container } from './button-icon-component-style.js';

export default function AddButton({ ...props }) {
  return (
    <Container {...props}>
      <FaPlus color={'#eee'} />
    </Container>
  );
}
