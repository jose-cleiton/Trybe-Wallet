/** @format */

import React from 'react';
import {
  useSelector,
} from 'react-redux';
import Gastos from './Gastos';
import Cambio from './Cambio';

export default function Header() {
  const email = useSelector(({ user }) => user.email);
  return (
    <header>
      <section>
        <Gastos />
        <Cambio />
        <p>
          Email:
          <span data-testid="email-field">

            {email}

          </span>

        </p>
      </section>
    </header>
  );
}
