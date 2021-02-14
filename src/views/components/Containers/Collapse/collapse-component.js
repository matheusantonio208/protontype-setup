import React from 'react';

import { Container } from './collapse-component-style.js';

export default function CollapseComponent({ ...props }) {
  return <Container>{props.children}</Container>;
}
