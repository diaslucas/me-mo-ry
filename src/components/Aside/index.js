import React from 'react';
import './aside.scss';

const Aside = () => (
  <aside>
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {'Player 1'}
        <span className="badge badge-primary badge-pill">3</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {'Player 2'}
        <span className="badge badge-primary badge-pill">1</span>
      </li>
    </ul>
  </aside>
);

export default Aside;
