import React from 'react';

import { Container, DropdownMenu } from './dropdown-component-style.js';

export default function Dropdown({ ...props }) {
  return (
    <Container {...props}>
      <DropdownMenu>{props.children}</DropdownMenu>
    </Container>
  );
}

Dropdown.defaultProps = {
  visible: false,
};
