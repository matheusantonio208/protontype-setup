import React from 'react';

import Button from '#components/Buttons/Button/button-component.js';
import Card from '#components/Containers/Card/card-component.js';
import Modal from '#components/Dialogs/Modal/modal-component.js';

import { Container } from './labdev-page-style.js';

export default function LabDev() {
  return (
    <Container className="container">
      <Modal>
        <header>
          <h3>Modal Teste</h3>
        </header>
        <d>
          <p>Lorem Lorem Lorem Lorem Lorem</p>
        </d>
        <footer>
          <Button>Teste</Button>
          <Button>Close</Button>
        </footer>
      </Modal>
      <Card color="purple" hover="0.5" maxWidth="450px" imagePosition="left">
        <header>
          <h5>Card Title</h5>
          <h6 className="text-muted">Support card subtitle</h6>
        </header>
        <img
          src="https://i.pinimg.com/originals/94/d8/fc/94d8fcd12fa17160b3adea1805693339.jpg"
          alt=""
        />

        <div>
          <h3>Title</h3>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          <Button color="purple">Teste</Button>
        </div>

        <footer>2 days ago</footer>
      </Card>
    </Container>
  );
}
