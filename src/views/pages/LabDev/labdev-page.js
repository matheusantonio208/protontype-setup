import React from 'react';

import Button from '#components/Buttons/Button/button-component.js';
import Card from '#components/Containers/Card/card-component.js';
import Collapse from '#components/Containers/Collapse/collapse-component.js';

import { Container } from './labdev-page-style.js';

export default function LabDev() {
  return (
    <Container className="container">
      <h3>LABORATORIO</h3>
      <Collapse>
        <h1>Collapse #1 - Title Collapse</h1>
        <p>
          Lorem ipsun Lorem Ipsun Lorem Ipsun Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quod perspiciatis iusto dicta itaque
          architecto tempore dolorum repellat. Enim perferendis aspernatur vero!
          Facilis neque repellendus, sed quam natus debitis assumenda ut?
        </p>
      </Collapse>
      <Collapse>
        <h1>Collapse #1 - Title Collapse</h1>
        <p>
          Lorem ipsun Lorem Ipsun Lorem Ipsun Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quod perspiciatis iusto dicta itaque
          architecto tempore dolorum repellat. Enim perferendis aspernatur vero!
          Facilis neque repellendus, sed quam natus debitis assumenda ut?
        </p>
      </Collapse>
    </Container>
  );
}
