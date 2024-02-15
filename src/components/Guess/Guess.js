import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {

  const results = checkGuess(value, answer);

  let cells;
  if (results) {
    cells = results.map((result, index) => {
      const letter = value && value.length > index ? value[index] : '';
      return (
        <span key={index} className={`cell ${result.status}`}>{letter}</span>
      );
    });
  } else {
    cells = Array.from({ length: 5 }, (_, index) => {
      const letter = value && value.length > index ? value[index] : '';
      return <span key={index} className="cell">{letter}</span>;
    });
  }

  return (
    <>
      <div className="guess">
        {cells}
      </div>
    </>
  );
}

export default Guess;
