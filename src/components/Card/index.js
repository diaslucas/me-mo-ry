import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './card.scss';

const Card = (props) => {
  const { name, color, onClick, isFlipped } = props;
  return (
    <div className="card-box">
      <ReactCardFlip isFlipped={isFlipped}>
        <div className="cards card-back" key="front" onClick={() => onClick()} role="presentation">
          <i className="fas fa-question" />
        </div>
        <div className={`cards card-${color}`} key="back" onClick={() => onClick()} role="presentation">
          <i className={`fas fa-${name}`} />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
