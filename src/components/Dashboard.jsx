import { useState, useEffect } from "react";

import { contents } from "../utils/contents";

import Modal from "./Modal";
import Results from "./Results";
import Counter from "./Counter";

import "../styles/Dashboard.css";

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
      <Counter count={count} answers={answers} limit={limit} />
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
