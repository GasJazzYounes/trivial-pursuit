import React from 'react';

function QuestionDisplay({ question, currentQuestionIndex, userAnswers, onAnswerSelect, onNextQuestion }) {
  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{question.question}</p>
      {/* Render answer options */}
      {question.incorrect_answers.map((answer, i) => (
        <label key={i}>
          <input
            type="radio"
            name={`q${currentQuestionIndex}`}
            value={answer}
            onChange={() => onAnswerSelect(answer)}
          />{' '}
          {answer}
        </label>
      ))}
      <label>
        <input
          type="radio"
          name={`q${currentQuestionIndex}`}
          value={question.correct_answer}
          onChange={() => onAnswerSelect(question.correct_answer)}
        />{' '}
        {question.correct_answer}
      </label>
      <button onClick={onNextQuestion}>Next Question</button>
    </div>
  );
}

export default QuestionDisplay;
