import React from 'react';
import he from 'he';

function QuestionDisplay({ question, currentQuestionIndex, userAnswers, onAnswerSelect, onNextQuestion }) {
  // decoding magic 
  const decodedQuestion = he.decode(question.question);

  return (
    <div className="question-container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{decodedQuestion}</p> {/* use the decoded question */}
      {/* render answer options */}
      {question.incorrect_answers.map((answer, i) => (
        <label key={i} htmlFor={`q${currentQuestionIndex}_incorrect_${i}`}>
          <input
            type="radio"
            name={`q${currentQuestionIndex}`}
            id={`q${currentQuestionIndex}_incorrect_${i}`}
            value={answer}
            onChange={() => onAnswerSelect(answer)}
          />{' '}
          <p className='answer'>{he.decode(answer)}</p> {/* decode answer options as well */}
        </label>
      ))}
      <label htmlFor={`q${currentQuestionIndex}_correct`}>
        <input
          type="radio"
          name={`q${currentQuestionIndex}`}
          id={`q${currentQuestionIndex}_correct`}
          value={question.correct_answer}
          onChange={() => onAnswerSelect(question.correct_answer)}
        />{' '}
        <p className='answer'>{he.decode(question.correct_answer)}</p> {/* decode correct answer */}
      </label>

      {/* place the Next Question button underneath */}
      <div className="next-button-container">
      <button className="trivia-button" onClick={onNextQuestion} disabled={userAnswers[currentQuestionIndex] === undefined}>
          Next Question
        </button>
    </div>
    </div>
  );
}

export default QuestionDisplay;

