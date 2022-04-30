import React from 'react';
import Gastos from './Gastos';
import Cambio from './Cambio';
import Email from './Email';

export default function Header() {
  return (
    <section className="section">
      <Gastos />
      <Cambio />
      <Email />
    </section>
  );
}
