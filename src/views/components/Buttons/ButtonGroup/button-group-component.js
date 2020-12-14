import React from 'react';

import { Container } from './button-group-component-style.js';

export default function GroupButton({ ...props }) {
  return (
    <Container direction="horizontal" {...props}>
      {props.children}
    </Container>
  );
}
