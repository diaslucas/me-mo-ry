/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-destructuring */

import _ from 'lodash';
import { flipCard, setCurrentPlayer } from '../actions';

export function unflipCards(store, currentCardIndex, lastCardFlipped) {
  store.dispatch(flipCard(currentCardIndex));
  store.dispatch(flipCard(lastCardFlipped.index));
}

export function changeCurrentPlayer(store) {
  const state = store.getState();
  const { players, game } = state;
  const { currentPlayer } = game;
  const playersIDs = _.keys(players);

  function getNextPlayer() {
    const currentPlayerIndex = playersIDs.indexOf(currentPlayer.toString());
    let nextPlayer = 0;
    if (currentPlayerIndex === playersIDs.length - 1) {
      nextPlayer = playersIDs[0];
    } else {
      nextPlayer = playersIDs[currentPlayerIndex + 1];
    }
    nextPlayer = parseInt(nextPlayer, 10);
    return nextPlayer;
  }

  const nextPlayer = getNextPlayer();
  store.dispatch(setCurrentPlayer(nextPlayer));
}
