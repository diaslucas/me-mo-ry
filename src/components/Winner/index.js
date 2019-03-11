import React from 'react';
import { Animated } from 'react-animated-css';
import './winner.scss';

const Winner = (props) => {
  const { player, visible } = props;
  return (
    <div className={visible ? 'visible' : 'invisible'}>
      <Animated className="winner" animationIn="tada" animationOut="slideOutRight" isVisible={visible}>
        <Animated animationIn="slideInRight" animationOut="slideOutRight" isVisible={visible}>
          {player.name} Wins <br />
        </Animated>
        <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={visible}>
          with {player.points} points
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
