import React from 'react';

function Banner({ answer, isGameWon, isGameLost, guesses }) {


  if (isGameWon) {
    return (

      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>{guesses} guesses</strong>.
        </p>
      </div>

    );

  } else if (isGameLost) {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }

}

export default Banner;
