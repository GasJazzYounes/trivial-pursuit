import React from 'react';

function GameResult({ userAnswers, questions }) {
  const score = userAnswers.filter((answer, index) => answer === questions[index].correct_answer).length;

  return (
    <div>
      <h2>Game Result</h2>
      <p>Your score: {score} / {questions.length}</p>
    </div>
  );
}

export default GameResult;
