import React from 'react';
import WordForm from '../WordForm';
import Guesses from '../Guesses';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const answerRef = React.useRef(answer);

  const addGuess = (newGuess) => {
    setGuesses([...guesses, newGuess]);

  };

  const numGuesses = guesses.length;

  const isGameWon = guesses.length > 0 && guesses[guesses.length - 1] === answer;
  const isGameLost = numGuesses >= NUM_OF_GUESSES_ALLOWED && !isGameWon;
  const isGameOver = isGameWon || isGameLost;

  return (
    <div>
      <Guesses guesses={guesses} answer={answerRef.current} />
      <WordForm onGuessSubmit={addGuess} game={isGameOver} />
      <Banner answer={answerRef.current} isGameWon={isGameWon} isGameLost={isGameLost} guesses={numGuesses} />

    </div>
  );
}

export default Game;
