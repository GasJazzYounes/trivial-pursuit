import React from "react";

function GameResult({ userAnswers, questions }) {
  const score = userAnswers.filter(
    (answer, index) => answer === questions[index].correct_answer
  ).length;
  console.log(`score`, score);
  console.log(questions.length);

  const percentage = (score / questions.length) * 100;

  console.log(percentage);

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
