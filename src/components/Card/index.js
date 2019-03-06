import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './card.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { isFlipped } = this.state;
    const { name, color } = this.props;
    return (
      <div className="card-box">
        <ReactCardFlip isFlipped={isFlipped}>
          <div className="cards card-back" key="front" onClick={this.handleClick} role="presentation">
            <i className="fas fa-question" />
          </div>
          <div className={`cards card-${color}`} key="back" onClick={this.handleClick} role="presentation">
            <i className={`fas fa-${name}`} />
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
