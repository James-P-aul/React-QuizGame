import React, { useState } from "react";
import "./Quiz.css";
import { data } from "../Assets/data";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);

  const reset = () => {
    for (let x = 0; x < 4; x++) {
      document.getElementById(data[index].ans).classList.remove("correct");
      document.getElementById(x + 1).classList.remove("wrong");
    }
    if (index == data.length - 1) {
      setResult(true);
    }

    setIndex((prev) => prev + 1);
    setLock(false);
  };

  const resetQuiz = () => {
    setIndex(0);
    setLock(false);
    setResult(false);
  };

  const checkAns = (e) => {
    if (!lock) {
      if (e.target.id == data[index].ans) {
        document.getElementById(e.target.id).classList.add("correct");
        setMarks((prev) => prev + 1);
        // console.log(marks);
      } else {
        document.getElementById(e.target.id).classList.add("wrong");
      }
      setLock(true);
      document.getElementById(data[index].ans).classList.add("correct");
    }
  };

  return (
    <div className="container">
      <h1>Quiz-App</h1>
      <hr />
      {result ? (
        <>
          <p className="question-title">
            You scored {marks} out of {data.length}
          </p>
          <button
            className="reset-btn"
            onClick={() => {
              resetQuiz();
            }}
          >
            Reset
          </button>
        </>
      ) : (
        <>
          <ul className="options">
            <p className="question-title">{data[index].question}</p>
            <li onClick={checkAns} id="1">
              {data[index].option1}
            </li>
            <li onClick={checkAns} id="2">
              {data[index].option2}
            </li>
            <li onClick={checkAns} id="3">
              {data[index].option3}
            </li>
            <li onClick={checkAns} id="4">
              {data[index].option4}
            </li>
            <button onClick={() => reset()}>Next</button>
          </ul>

          <p className="question-index">
            Question {index + 1} of {data.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Quiz;
