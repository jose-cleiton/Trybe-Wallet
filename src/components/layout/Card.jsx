import React from 'react';

export default ({ titulo, children }) => (
  <section className="Card">
    <h3 className="Title">{titulo}</h3>
    <div className="Content">{children}</div>
  </section>
);
