import React from "react";
import "./result.css";
import { riddles } from "../../constants/riddles";

function Result({ answers }) {
  const findCorrectAnswers = () => {
    let correctAnswers = 0;

    for (let i = 0; i < riddles.length; i++) {
      if (riddles[i].correctAnswer === answers[i][i + 1]) {
        correctAnswers++;
      }
    }

    return correctAnswers;
  };

  const yourAnswers = [];
  const correctAnswersArray = [];
  const wrongAnswers = [];
  let n = 1;

  for (let i = 0; i < answers.length; i++) {
    yourAnswers.push(answers[i][n]);
    correctAnswersArray.push(riddles[i].correctAnswer);
    if (answers[i][n] !== riddles[i].correctAnswer) {
      wrongAnswers.push(answers[i][n]);
    }
    n += 1;
  }

  const correctAnswers = findCorrectAnswers();
  const percentageScored = (correctAnswers / riddles.length) * 100;

  return (
    <div>
      <h1>You have successfully submitted the assessment</h1>
      <ul className="analytics">
        <li>Riddles asked - {riddles.length}</li>
        <li>Riddles correctly answered - {correctAnswers}</li>
        <li>
          Your score -
          {` ${percentageScored.toFixed(0)}% ${
            (percentageScored === 100 && "😃") ||
            (percentageScored === 0 && "😞") ||
            ""
          }`}
        </li>
      </ul>
      {(percentageScored < 100 || percentageScored < 0) && (
        <div className="comparison">
          <div>
            <h3>Your answers</h3>
            <ul>
              {yourAnswers.map((answer) => (
                <li className={wrongAnswers.includes(answer) ? "wrongAns" : ""}>
                  {answer}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Correct answers</h3>
            <ul>
              {correctAnswersArray.map((answer) => (
                <li>{answer}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// You answered ... 1. a 2. b 3. c
// Correct answers were ... 1. b. 2.c. 3.a

export default Result;
