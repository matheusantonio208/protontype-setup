import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './table-component-style.js';

export default function TableComponent({ children }) {
  return <Container>{children}</Container>;
}

TableComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
