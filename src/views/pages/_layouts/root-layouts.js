import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

import AuthLayout from './Authentication/auth-layout.js';
import DefaultLayout from './Default/default-layout.js';

export default function RouterWrapper({ path, component: Component, ...rest }) {
  function switchLayout(pathOfLayout) {
    switch (pathOfLayout) {
      case '/login': {
        return AuthLayout;
      }
      case '/register': {
        return AuthLayout;
      }

      default: {
        return DefaultLayout;
      }
    }
  }

  const Layout = switchLayout(path);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.string,
};
