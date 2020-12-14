import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container, Nav, NavItem } from './sidebar-component-style.js';

export default function ComponentName() {
  return (
    <Container>
      <div className="logo-image">
        <Skeleton width={165} height={60} />
      </div>
      <Nav>
        <NavItem to="/" exact activeClassName="active">
          <Skeleton width={15} /> <Skeleton width={150} />
        </NavItem>
        <NavItem to="/deliveryman" activeClassName="active">
          <Skeleton width={15} /> <Skeleton width={150} />
        </NavItem>
        <NavItem to="/recipient" activeClassName="active">
          <Skeleton width={15} /> <Skeleton width={150} />
        </NavItem>
        <NavItem to="/problems" activeClassName="active">
          <Skeleton width={15} /> <Skeleton width={150} />
        </NavItem>
      </Nav>
    </Container>
  );
}
