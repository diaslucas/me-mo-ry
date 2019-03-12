import React from 'react';
import './soundButton.scss';

const SoundButton = (props) => {
  const { isOn, onClick } = props;
  const btnIcon = isOn ? <i className="fas fa-volume-up" /> : <i className="fas fa-volume-mute" />;
  return (
    <button type="button" className="btn-sound" onClick={onClick}>
      {btnIcon}
    </button>
  );
};

export default SoundButton;
