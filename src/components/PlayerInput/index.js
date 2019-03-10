import React from 'react';
import './playerInput.scss';

const PlayerInput = (props) => {
  const { value, style, onChange } = props;

  return (
    <input className="input-player" value={value} style={style} onChange={onChange} />
  );
};

export default PlayerInput;
