import React, { useState, useEffect } from "react";
import CategoryDropdown from "./CategoryDropdown";
import LoadingIndicator from "./LoadingIndicator";
import ErrorMessage from "./ErrorMessage";
import QuestionDisplay from "./QuestionDisplay";
import GameResult from "./GameResult";
import SaveGameButton from "./SaveGameButton";


function Trivia({ playerName }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch categories from the API on component mount
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.error(err));
  }, []);

  const fetchQuestions = async () => {
    setError("");
    setLoading(true);

    const apiUrl = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${selectedCategory}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuestions(data.results);
      setCurrentQuestionIndex(0); // Reset to the first question
    } catch (err) {
      setError("Error fetching questions");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (selectedAnswer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <h1>Trivia Game App</h1>
      <div className="generate-questions-container">
      <CategoryDropdown
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <select
        value={numOfQuestions}
        onChange={(e) => setNumOfQuestions(e.target.value)}
      >
        <option value="5">5 Questions</option>
        <option value="10">10 Questions</option>
        <option value="15">15 Questions</option>
        <option value="20">20 Questions</option>
      </select>
      <div className="generate-questions-button-container">
      <button onClick={fetchQuestions}>Generate Questions</button>
      </div>
      </div>

      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}

      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div className="question-container">
        <QuestionDisplay
          question={questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          userAnswers={userAnswers}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
        />
        </div>
      )}

      {currentQuestionIndex >= questions.length && (
        <GameResult userAnswers={userAnswers} questions={questions} />
      )}

      {currentQuestionIndex >= questions.length && (
        <SaveGameButton userAnswers={userAnswers} questions={questions} playerName={playerName}/>
      )}
    </div>
  );
}

export default Trivia;
