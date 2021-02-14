import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '#pages/_layouts/root-layouts.js';
import LabDev from '#pages/LabDev/labdev-page.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/lab" component={LabDev} />
    </Switch>
  );
}
