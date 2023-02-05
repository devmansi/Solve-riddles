import React from "react";
import { riddles } from "./constants/riddles";
import Review from "./components/review/review";
import Theme from "./components/theme/theme";
import Result from "./components/result/result";
import Quiz from "./components/quiz/quiz";
import "./App.css";

function App() {
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const answers = [];
  for (const key in selectedOptions) {
    const answerNumber = Number(key) + 1;
    answers.push({ [answerNumber]: selectedOptions[key] });
  }

  function submit() {
    setQuizCompleted(true);
  }

  return (
    <>
      <div className={`outer-container ${darkMode ? "dark-mode" : ""}`}>
        <Theme darkmode={darkMode} setDarkMode={setDarkMode} />
        <div className={`container ${darkMode ? "dark-mode" : ""}`}>
          {!quizCompleted ? (
            <>
              <h1>Interesting Riddles</h1>
              <Quiz
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
              <Review answers={answers} />
              {Object.keys(selectedOptions).length === riddles.length && (
                <div className="submit">
                  <button className="submit-btn" onClick={submit}>
                    Submit
                  </button>
                </div>
              )}
            </>
          ) : (
            <Result answers={answers} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
