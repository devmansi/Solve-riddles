import React from "react";
import "./review.css";

function Review({ answers }) {
  return (
    <div className="review-answers-container">
      <h2>Review Answers</h2>
      <ul className="answers-list">
        {answers.map((answer) => {
          return (
            <>
              <li>
                <span className="question">{Object.keys(answer)[0]}.</span>{" "}
                {answer[Object.keys(answer)[0]]}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Review;
