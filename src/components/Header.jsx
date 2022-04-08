/** @format */

import React from 'react';
import {
  useSelector,
} from 'react-redux';

export default function Header() {
  const email = useSelector(({ user }) => user.email);
  return (
    <header>
      <p>
        Email:
        <span data-testid="email-field">

          {email}

        </span>

      </p>
    </header>
  );
}
