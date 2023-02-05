import React from "react";
import Riddle from "./components/riddle";
import { riddles } from "./constants/riddles";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "./App.css";

function App() {
  const [riddleNumber, setRiddleNumber] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [submitBtnClicked, setSubmitBtnClicked] = React.useState(false);
  const answers = [];
  for (const key in selectedOptions) {
    const answerNumber = Number(key) + 1;
    answers.push({ [answerNumber]: selectedOptions[key] });
  }

  const findCorrectAnswers = () => {
    let correctAnswers = 0;
    for (let i = 0; i < riddles.length; i++) {
      if (riddles[i].correctAnswer === answers[i][i + 1]) {
        correctAnswers += 1;
      }
    }
    return correctAnswers;
  };

  const correctAnswers = submitBtnClicked && findCorrectAnswers();

  function submit() {
    setSubmitBtnClicked(true);
  }

  return (
    <>
      <div className="container">
        {!submitBtnClicked ? (
          <>
            <h1>Interesting Riddles</h1>
            <div className="riddles-container">
              {riddleNumber > 0 && (
                <MdArrowBackIos
                  className="arrow left-arrow"
                  onClick={() => setRiddleNumber((prev) => prev - 1)}
                />
              )}
              <Riddle
                riddleNumber={riddleNumber}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
              {riddleNumber < riddles.length - 1 && (
                <MdArrowForwardIos
                  className="arrow right-arrow"
                  onClick={() => setRiddleNumber((prev) => prev + 1)}
                />
              )}
            </div>
            <div className="review-answers-container">
              <h2>Review Answers</h2>
              <ul className="answers-list">
                {answers.length > 0 &&
                  answers.map((answer) => {
                    return (
                      <>
                        <li>
                          <span className="question">
                            {Object.keys(answer)[0]}.
                          </span>{" "}
                          {answer[Object.keys(answer)[0]]}
                        </li>
                      </>
                    );
                  })}
              </ul>
            </div>
            {Object.keys(selectedOptions).length === riddles.length && (
              <div className="submit">
                <button className="submit-btn" onClick={submit}>
                  Submit
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div>
              <h1>You have successfully submitted the assessment</h1>
              <ul className="analytics">
                <li>Riddles asked - {riddles.length}</li>
                <li>Riddles correctly answered - {correctAnswers}</li>
                <li>
                  Your score -
                  {((correctAnswers / riddles.length) * 100).toFixed(0)}%
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
