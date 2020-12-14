import React from 'react';

import { Container } from './blockquote-component-style.js';

export default function BlockquoteComponent({ ...props }) {
  return <Container>{props.children}</Container>;
}
