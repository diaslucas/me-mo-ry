import React from 'react';
import './playersSidebar.scss';

const PlayersSidebar = (props) => {
  const { players, currentPlayer } = props;
  const activeStyle = {
    color: '#fff',
    fontWeight: 'bold',
    background: '#a4c7e0',
  };
  return (
    <aside className="score-section">
      <ul className="list-group">
        {players.map(player => (
          <li
            key={player.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={(player.id === currentPlayer ? activeStyle : {})}
          >
            {player.name}
            <span className="badge badge-primary badge-pill">{player.points}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PlayersSidebar;
