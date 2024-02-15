import React from 'react';

function WordForm({ onGuessSubmit, game }) {
  const [guess, setGuess] = React.useState('');
  const [numGuesses, setNumGuesses] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    if (inputValue.match(/^.{0,5}$/)) {
      setGuess(inputValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info({ guess });
    onGuessSubmit(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        pattern=".{5}"
        title="Please enter exactly 5 characters"
        disabled={game}
      />
      {game && <p>Maximum number of guesses reached.</p>}
    </form>
  );
}

export default WordForm;
