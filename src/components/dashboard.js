import { useState, useEffect } from "react";

import Modal from "./modal";
import Results from "./results";

import "../styles/dashboard.css";

const getDashoffset = (array, start, limit) => {
  let sum = array.slice(start).reduce((a, b) => a + b, 0);
  return 440 - Math.floor((sum / limit) * 440);
};

export default function Dashboard({ changeCard, limit, count, setCount }) {
  const [answers, setAnswers] = useState([0, 0, 0]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (count >= limit) {
      setShowResults(true);
    }
  }, [count, limit]);

  const handleAnswer = (answer) => {
    if (count < limit) {
      setAnswers((prevAnswers) => {
        let newAnswers = [...prevAnswers];
        switch (answer) {
          case "red":
            newAnswers[0] += 1;
            break;
          case "yellow":
            newAnswers[1] += 1;
            break;
          case "green":
            newAnswers[2] += 1;
            break;
          default:
            return prevAnswers;
        }
        return newAnswers;
      });
      setCount((prevCount) => prevCount + 1);
      // TODO: prevent the last card in deck from changing
      changeCard();
    } else {
      setShowResults(true);
    }
  };

  const restartSession = () => {
    setCount(0);
    setAnswers([0, 0, 0]);
    setShowResults(false);
    changeCard();
  };

  return (
    <div className="Dashboard">
      <div className="counter">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle
            className="red-circle"
            style={{
              strokeDashoffset: `${
                count ? getDashoffset(answers, 0, limit) : 440
              }px`,
            }}
            cx="70"
            cy="70"
            r="70"
          ></circle>
          <circle
            className="yellow-circle"
            style={{
              strokeDashoffset: `${
                count ? getDashoffset(answers, 1, limit) : 440
              }px`,
            }}
            cx="70"
            cy="70"
            r="70"
          ></circle>
          <circle
            className="green-circle"
            style={{
              strokeDashoffset: `${
                count ? getDashoffset(answers, 2, limit) : 440
              }px`,
            }}
            cx="70"
            cy="70"
            r="70"
          ></circle>
        </svg>
        <div className="number">
          <div className="statbox">
            {count}
            <div className="statbox-text">
              <div className="redtext">{answers[0]}</div>
              <div className="yellowtext">{answers[1]}</div>
              <div className="greentext">{answers[2]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="assessment">
        <button className="red" onClick={() => handleAnswer("red")}>
          Nope
        </button>
        <button className="yellow" onClick={() => handleAnswer("yellow")}>
          Kinda
        </button>
        <button className="green" onClick={() => handleAnswer("green")}>
          Yep
        </button>
      </div>

      {showResults && (
        <Modal setVisibility={setShowResults}>
          <Results
            answers={answers}
            limit={limit}
            restartSession={restartSession}
            setShowResults={setShowResults}
          />
        </Modal>
      )}
    </div>
  );
}
