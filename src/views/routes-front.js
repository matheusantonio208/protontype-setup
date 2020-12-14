import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '#pages/_layouts/root-layouts.js';
import Lab from '#pages/Lab/labdev-page.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Lab} />
    </Switch>
  );
}
