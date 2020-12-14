import React from 'react';
import { ImSpinner8 } from 'react-icons/im/index.js';
import { IoIosArrowForward } from 'react-icons/io/index.js';

import { Button } from './button-component-style.js';

export default function ButtonComponent({ ...props }) {
  return (
    <Button {...props}>
      {props.loading ? <ImSpinner8 /> : props.children}
      {props.dropdown && <IoIosArrowForward />}
    </Button>
  );
}

ButtonComponent.defaultProps = {
  color: 'primary',
};
