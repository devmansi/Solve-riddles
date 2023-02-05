import React from "react";
import { riddles } from "../../constants/riddles";
import "./riddle.css";

function Riddle({ riddleNumber, selectedOptions, setSelectedOptions }) {
  const { question, options } = riddles[riddleNumber];
  return (
    <div className="riddle-container">
      <h2>
        <span className="question">{`Q${riddleNumber + 1}`}</span> {question}
      </h2>
      <ul className="options-container">
        {options.map((option, index) => (
          <li className="option" key={index}>
            <input
              type="radio"
              id={option}
              name={riddleNumber}
              checked={selectedOptions[riddleNumber] === option}
              value={selectedOptions[riddleNumber] && option}
              onChange={() => {
                setSelectedOptions((prev) => {
                  return {
                    ...prev,
                    [riddleNumber]: option,
                  };
                });
              }}
            />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Riddle;
