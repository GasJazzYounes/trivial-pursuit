import React from "react";

function GameResult({ userAnswers, questions }) {
  const score = userAnswers.filter(
    (answer, index) => answer === questions[index].correct_answer
  ).length;

  const rawPercentage = (score / questions.length) * 100;
  const percentage = Number.isInteger(rawPercentage)
    ? rawPercentage.toFixed(0)
    : rawPercentage.toFixed(2);

  return (
    <div>
      <h2>Game Result</h2>
      <p>
        Your score: {score} / {questions.length} ({percentage} % )
      </p>
    </div>
  );
}

export default GameResult;
