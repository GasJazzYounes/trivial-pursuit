import React, { useState, useEffect } from "react";
import CategoryDropdown from "./components/CategoryDropdown";
import QuestionDisplay from "./components/QuestionDisplay";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorMessage from "./components/ErrorMessage";
import GameResult from "./components/GameResult";
import SaveGameButton from "./components/SaveGameButton";

function App() {
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
      <button onClick={fetchQuestions}>Generate Questions</button>

      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}

      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <QuestionDisplay
          question={questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          userAnswers={userAnswers}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestionIndex >= questions.length && (
        <GameResult userAnswers={userAnswers} questions={questions} />
      )}

      {currentQuestionIndex >= questions.length && (
        <SaveGameButton userAnswers={userAnswers} questions={questions} />
      )}
    </div>
  );
}

export default App;
