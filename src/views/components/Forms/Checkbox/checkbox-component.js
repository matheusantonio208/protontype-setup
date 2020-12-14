import React from 'react';

import { Container, Checkbox } from './checkbox-component-style.js';

export default function CheckboxComponent({ ...props }) {
  return (
    <Container>
      <Checkbox {...props} />
    </Container>
  );
}
