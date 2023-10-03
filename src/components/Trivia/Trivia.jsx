import React, { useState, useEffect } from "react";
import CategoryDropdown from "./CategoryDropdown";
import LoadingIndicator from "./LoadingIndicator";
import ErrorMessage from "./ErrorMessage";
import QuestionDisplay from "./QuestionDisplay";
import GameResult from "./GameResult";
import SaveGameButton from "./SaveGameButton";
import Countdown from "./Countdown";
import AnswerNotification from "./AnswerNotification"; //just trying

function Trivia({ playerName }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCategories, setShowCategories] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedQuestionType, setSelectedQuestionType] = useState("");
  const [showCorrectNotification, setShowCorrectNotification] = useState(false); // just trying
  const [showWrongNotification, setShowWrongNotification] = useState(false); // just try

  useEffect(() => {
    // Fetch categories from the API on component mount
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.error(err));
  }, []);

  const fetchQuestions = async () => {
    setError("");
    setShowCountdown(true);
    setShowCategories(false);
    if (!selectedDifficulty) {
      setError("Please select a difficulty level."); // I have to style it with red color
      return;
    }
    if (!selectedQuestionType) {
      setError("Please select a question type.");
      return;
    }
    if (!selectedCategory) {
      setError("Please select a category.");
      return;
    }

    const apiUrl = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=${selectedQuestionType}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuestions(data.results);
      setCurrentQuestionIndex(0); // Reset to the first question
    } catch (err) {
      setError("Error fetching questions");
    } finally {
      setShowButtons(true);
    }
  };

  // making some changes

  const handleAnswerSelect = (selectedAnswer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    if (userAnswers[currentQuestionIndex] !== undefined) {
      // i display the message
      setShowCorrectNotification(
        userAnswers[currentQuestionIndex] ===
          questions[currentQuestionIndex].correct_answer
      );
      setShowWrongNotification(
        userAnswers[currentQuestionIndex] !==
          questions[currentQuestionIndex].correct_answer
      );

      // making timer
      setTimeout(() => {
        setShowCorrectNotification(false);
        setShowWrongNotification(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      }, 1000);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // finish trying

  const handleCountdown = () => {
    setShowCountdown(false);
  };

  const handleNewGame = () => {
    setShowCategories(true);
    setShowButtons(false);
  };

  return (
    <div>
      <h1>Trivia Game App</h1>
      {showCategories && (
        <form className="generate-questions-container" onSubmit={fetchQuestions}>
          <CategoryDropdown
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <select
            value={selectedQuestionType}
            onChange={(e) => setSelectedQuestionType(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a question type
            </option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            required
          >
            <option value="">Select a difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            value={numOfQuestions}
            onChange={(e) => setNumOfQuestions(e.target.value)}
            required
          >
            <option value="5">5 Questions</option>
            <option value="10">10 Questions</option>
            <option value="15">15 Questions</option>
            <option value="20">20 Questions</option>
          </select>

          <div className="generate-questions-button-container">
            <button className="trivia-button">
              Generate Questions
            </button>
          </div>
        </form>
      )}

      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {showCountdown && <Countdown hideCountdown={handleCountdown} />}
      {questions.length > 0 &&
        currentQuestionIndex < questions.length &&
        !showCountdown && (
          <div className="question-container">
            <QuestionDisplay
              key={currentQuestionIndex}
              question={questions[currentQuestionIndex]}
              currentQuestionIndex={currentQuestionIndex}
              userAnswers={userAnswers}
              onAnswerSelect={handleAnswerSelect}
              onNextQuestion={handleNextQuestion}
            />

            {/* trying here  */}
            {showCorrectNotification && (
              <AnswerNotification
                message="Correct answer 👋👋👋👋"
                show={showCorrectNotification}
                onClose={() => setShowCorrectNotification(false)}
              />
            )}

            {showWrongNotification && (
              <AnswerNotification
                message="Wrong answer! 😔😔😔😔"
                show={showWrongNotification}
                onClose={() => setShowWrongNotification(false)}
              />
            )}
          </div>
        )}

      {questions.length > 0 &&
        !showCountdown &&
        currentQuestionIndex >= questions.length &&
        showButtons && (
          <>
            <GameResult userAnswers={userAnswers} questions={questions} />
            <SaveGameButton
              userAnswers={userAnswers}
              questions={questions}
              playerName={playerName}
              playAgain={handleNewGame}
            />
          </>
        )}
    </div>
  );
}

export default Trivia;
