import { useState, useEffect } from "react";

import Modal from "./modal";
import Results from "./results";
import { contents } from "../assets/contents";

import "../styles/dashboard.css";

const getDashoffset = (array, start, limit) => {
  let sum = array.slice(start).reduce((a, b) => a + b, 0);
  return 440 - Math.floor((sum / limit) * 440);
};

export default function Dashboard({
  language,
  changeCard,
  limit,
  count,
  setCount,
  answers,
  setAnswers,
}) {
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
      if (count < limit - 1) {
        changeCard();
      }
      setCount((prevCount) => prevCount + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartSession = () => {
    setCount(0);
    setAnswers([0, 0, 0]);
    changeCard();
    setShowResults(false);
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
          {contents.negative[language]}
        </button>
        <button className="yellow" onClick={() => handleAnswer("yellow")}>
        {contents.neutral[language]}
        </button>
        <button className="green" onClick={() => handleAnswer("green")}>
        {contents.positive[language]}
        </button>
      </div>

      {showResults && (
        <Modal setVisibility={setShowResults}>
          <Results
            language={language}
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
