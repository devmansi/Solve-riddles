import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { riddles } from "../../constants/riddles";

import Riddle from "../riddle/riddle";

import "./quiz.css";

function Quiz({ selectedOptions, setSelectedOptions }) {
  const [riddleNumber, setRiddleNumber] = React.useState(0);

  return (
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
  );
}

export default Quiz;
