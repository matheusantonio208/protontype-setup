import React from 'react';

import { Container } from './card-component-style.js';

export default function CardComponent({ ...props }) {
  return <Container {...props}>{props.children}</Container>;
}
