import React from 'react';
import './playersSidebar.scss';
import PlayerInput from '../../components/PlayerInput';
import store from '../../store';
import { setPlayerName, toggleSound } from '../../actions';
import SoundButton from '../../components/SoundButton';

const PlayersSidebar = (props) => {
  const state = store.getState();
  const { game } = state;
  const { players, currentPlayer } = props;
  const activeStyleLi = {
    background: '#a4c7e0',
  };
  const activeStyleInput = {
    color: '#fff',
    fontWeight: 'bold',
  };

  const handleNameChange = (e, playerId) => {
    const { value } = e.target;
    store.dispatch(setPlayerName(playerId, value));
  };

  const handleToggleSound = () => {
    store.dispatch(toggleSound());
  };

  return (
    <aside className="score-section">
      <ul className="list-group">
        {players.map(player => (
          <li
            key={player.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={(player.id === currentPlayer ? activeStyleLi : {})}
          >
            <PlayerInput
              value={player.name}
              style={(player.id === currentPlayer ? activeStyleInput : {})}
              onChange={e => handleNameChange(e, player.id)}
            />
            <span className="badge badge-primary badge-pill">{player.points}</span>
          </li>
        ))}
      </ul>
      <SoundButton isOn={game.isSoundOn} onClick={() => handleToggleSound()} />
    </aside>
  );
};

export default PlayersSidebar;
