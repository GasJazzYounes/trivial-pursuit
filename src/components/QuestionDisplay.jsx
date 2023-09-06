import React from 'react';
import he from 'he';

function QuestionDisplay({ question, currentQuestionIndex, userAnswers, onAnswerSelect, onNextQuestion }) {
  // decoding magic 
  const decodedQuestion = he.decode(question.question);

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{decodedQuestion}</p> {/* use the decoded question */}
      {/* render answer options */}
      {question.incorrect_answers.map((answer, i) => (
        <label key={i}>
          <input
            type="radio"
            name={`q${currentQuestionIndex}`}
            value={answer}
            onChange={() => onAnswerSelect(answer)}
          />{' '}
          {he.decode(answer)} {/* decode answer options as well */}
        </label>
      ))}
      <label>
        <input
          type="radio"
          name={`q${currentQuestionIndex}`}
          value={question.correct_answer}
          onChange={() => onAnswerSelect(question.correct_answer)}
        />{' '}
        {he.decode(question.correct_answer)} {/* decode correct answer */}
      </label>
      <button onClick={onNextQuestion}>Next Question</button>
    </div>
  );
}

export default QuestionDisplay;

