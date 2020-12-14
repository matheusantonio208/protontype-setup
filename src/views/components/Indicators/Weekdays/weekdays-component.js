import React from 'react';

import { Container, Day } from './weekdays-component-style.js';

export default function WeekdaysComponent() {
  return (
    <Container>
      <Day clickable day="sunday">
        D
      </Day>
      <Day day="monday">S</Day>
      <Day day="tuesday">T</Day>
      <Day day="wednesday">Q</Day>
      <Day day="thursday">Q</Day>
      <Day day="friday">S</Day>
      <Day day="saturday">S</Day>
    </Container>
  );
}
