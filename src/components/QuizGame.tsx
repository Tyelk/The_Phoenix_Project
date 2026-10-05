import { useState } from "react";
import { QUIZ_QUESTION_DATA } from "./page-data/data/QuizQuestionData";

export default function QuizGame() {
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTION_DATA[currentQuestionIndex];

  // Toggle game rules
  const toggleHowToPlay = (): void => {
    setIsHowToPlayOpen((prev) => !prev);
  };

  const clearAnswer = (): void => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  // toggle playing
  const togglePlay = (): void => {
    setIsPlaying((prev) => !prev);
    setCurrentQuestionIndex(0);
    clearAnswer();
    setIsFinished(false);
  };

  // handle answer selection
  const handleAnswerSelect = (selectedIndex: number): void => {
    if (isAnswered) return; // Abort if a answer selected
    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);
  };

  // handle next question
  const handleNextQuestion = (): void => {
    if (currentQuestionIndex >= QUIZ_QUESTION_DATA.length - 1) {
      setIsFinished(true);
      return; // abort/end if all questions have been seen
    }

    setCurrentQuestionIndex((prev) => prev + 1); // increment index to next question
    clearAnswer();
  };

  const handleButtonClasses = (questionIndex: number): string => {
    let buttonClass = "plain-btn ";

    // highlight correct/wrong answers and dim other ones
    if (isAnswered) {
      if (questionIndex === currentQuestion.answer) {
        buttonClass += " correct-answer-btn";
      } else if (questionIndex === selectedAnswer) {
        buttonClass += " incorrect-answer-btn";
      } else {
        buttonClass += " dim-answer-btn";
      }
      buttonClass += " disabled-answer-btn";
    }

    return buttonClass;
  };

  return (
    <div className="page-content">
      <div className="content-page-main-area">
        <div className="content-main-area-header">
          <h1>Prostate Puzzle</h1>
        </div>

        {isPlaying && !isFinished && (
          <div className="quiz-game-content">
            {/* quiz header */}
            <div className="quiz-game-header">
              <button type="button" className="plain-btn" onClick={togglePlay}>
                Restart
              </button>
            </div>
            <p className="game-question">{currentQuestion.question}</p>

            {/* Quiz options */}
            <div className="quiz-options">
              {currentQuestion.options.map((option, index) => {
                let buttonClasses = handleButtonClasses(index); // get button classes
                return (
                  <button
                    key={index}
                    type="button"
                    className={buttonClasses}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* quiz footer */}
            <div className="quiz-game-footer">
              <button
                type="button"
                className={`plain-btn pulsing-glow ${isAnswered ? "" : "hidden-element"}`}
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex < QUIZ_QUESTION_DATA.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            </div>
          </div>
        )}

        {/* end/finish screen*/}
        {isFinished && (
          <div className="centered-content">
            <h3>Thats all the questions!</h3>
            <p>
              Did you get them all correct? If not think about exploring the
              website to find the answers, who knows that information may save
              your life!
            </p>
            <button type="button" className="plain-btn" onClick={togglePlay}>
              Finish
            </button>
          </div>
        )}

        {/* start screen */}
        {!isHowToPlayOpen && !isPlaying && (
          <div className="centered-content">
            <button className="plain-btn" onClick={togglePlay} type="button">
              Play
            </button>
            <button
              className="plain-btn"
              onClick={toggleHowToPlay}
              type="button"
            >
              How to Play
            </button>
          </div>
        )}

        {/* How to Play screen */}
        {isHowToPlayOpen && (
          <div className="centered-content">
            <h2>How to Play</h2>
            <ul>
              <li>A question will be shown at the top of the screen</li>
              <li>Below the question will be some possible answers</li>
              <li>Select the answer that best fits the question</li>
              <li>The correct answer will be shown after each question</li>
            </ul>
            <button
              className="plain-btn"
              onClick={toggleHowToPlay}
              type="button"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
