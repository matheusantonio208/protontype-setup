import PropTypes from 'prop-types';
import React from 'react';

import AddButton from '#components/Buttons/ButtonIcon/button-icon-component.js';
import Header from '#components/Navbars/Sidebar/sidebar-component.js';

import { Wrapper } from './default-layout-style.js';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <AddButton />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
