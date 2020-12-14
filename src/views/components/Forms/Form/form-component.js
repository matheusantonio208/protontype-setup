import React from 'react';

import { Container, InputField } from './form-component-style.js';

export function Form({ ...props }) {
  return <Container {...props}>{props.children}</Container>;
}

export function Input({ ...props }) {
  return <InputField {...props} />;
}
