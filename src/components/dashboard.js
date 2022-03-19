import { useState, useEffect } from "react";
import { getDashoffset } from "../utils/counter";

import { STROKE, RADIUS, CIRCUMFERENCE } from "../utils/constants";
import { contents } from "../assets/contents";

import Modal from "./modal";
import Results from "./results";

import "../styles/dashboard.css";

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
        <svg viewBox="0 0 100 100">
          <circle
            style={{
              strokeWidth: `${STROKE}`,
            }}
            cx="50"
            cy="50"
            r={RADIUS}
          ></circle>
          <circle
            className="red-circle"
            style={{
              strokeWidth: `${STROKE}`,
              strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
              strokeDashoffset: `${
                count ? getDashoffset(answers, 0, limit) : CIRCUMFERENCE
              }`,
            }}
            cx="50"
            cy="50"
            r={RADIUS}
          ></circle>
          <circle
            className="yellow-circle"
            style={{
              strokeWidth: `${STROKE}`,
              strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
              strokeDashoffset: `${
                count ? getDashoffset(answers, 1, limit) : CIRCUMFERENCE
              }`,
            }}
            cx="50"
            cy="50"
            r={RADIUS}
          ></circle>
          <circle
            className="green-circle"
            style={{
              strokeWidth: `${STROKE}`,
              strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
              strokeDashoffset: `${
                count ? getDashoffset(answers, 2, limit) : CIRCUMFERENCE
              }`,
            }}
            cx="50"
            cy="50"
            r={RADIUS}
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
