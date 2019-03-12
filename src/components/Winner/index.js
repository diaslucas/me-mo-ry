/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Animated } from 'react-animated-css';
import './winner.scss';

const Winner = (props) => {
  const { player, visible } = props;
  const tie = player === null;
  const audio = new Audio('src/sounds/course_clear.wav');
  const winner = tie ? 'Draw!' : `${player.name} Wins`;
  const points = tie ? '' : `with ${player.points} points`;
  if (visible) {
    audio.play();
  }
  return (
    <div className={visible ? 'visible' : 'invisible'}>
      <Animated className="winner" animationIn="tada" animationOut="slideOutRight" isVisible={visible}>
        <Animated animationIn="slideInRight" animationOut="slideOutRight" isVisible={visible}>
          {winner} <br />
        </Animated>
        <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={visible}>
          {points}
        </Animated>
      </Animated>
    </div>
  );
};

function isEqual(prevProps, nextProps) {
  if (prevProps.visible !== nextProps.visible) {
    return false;
  }
  return true;
}

export default React.memo(Winner, isEqual);
