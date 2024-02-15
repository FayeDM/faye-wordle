import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';

function Guesses({ guesses, answer }) {

  const renderGuesses = () => {
    const indices = range(6); // Generates an array [0, 1, 2, 3, 4, 5]
    return indices.map((index) => (
      <Guess key={index} value={guesses[index] || ''} answer={answer} />
    ));
  };

  return <div className="guesses-container">{renderGuesses()}</div>;


  // return (
  //   <div>
  //     <h2>Guesses:</h2>
  //     <ul>
  //       {Array.isArray(guesses) && guesses.map((guess, index) => (
  //         <li key={index}>{guess}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default Guesses;
