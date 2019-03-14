/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Animated } from 'react-animated-css';
import './winner.scss';
import { playAudio, playAgain } from '../../helpers';
import courseClearSound from '../../sounds/course_clear.wav';

const Winner = (props) => {
  const { player, visible } = props;
  const tie = player === null;
  const audio = new Audio(courseClearSound);
  const winner = tie ? 'Draw!' : `${player.name} Wins`;
  const points = tie ? '' : `with ${player.points} points`;
  if (visible) {
    playAudio(audio);
  }

  return (
    <div className={visible ? 'd-block' : 'd-none'}>
      <Animated className="winner" animationIn="tada" animationOut="slideOutRight" isVisible={visible}>
        <Animated animationIn="slideInRight" animationOut="slideOutRight" isVisible={visible}>
          {winner} <br />
        </Animated>
        <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={visible}>
          {points}
        </Animated>
        <Animated animationIn="slideInUp" animationOut="slideOutDown" isVisible={visible}>
          <button type="button" className="btn btn-outline-info" onClick={() => playAgain()}>Play Again</button>
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
