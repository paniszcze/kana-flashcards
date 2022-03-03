import { useState } from 'react';

import '../styles/counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([0, 0, 0]);

  const handleClick = (answer) => {
    setAnswers (prevAnswers => {
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

      setCount (prevCount => {
        return newAnswers.reduce((sum, a) => sum + a, 0);
      });

      return newAnswers;
    });
  }

  return (
    <>
      <div className="counter">
        <div className="stats">
          <div className="count">
            <svg>
              <circle className="base-circle" cx="70" cy="70" r="70"></circle>
              <circle className="red-circle" cx="70" cy="70" r="70"></circle>
              <circle className="yellow-circle" cx="70" cy="70" r="70"></circle>
              <circle className="green-circle" cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
                {count}
            </div>
          </div>
        </div>
      </div>
      <div className="assessment">
        <p>{answers[0]} {answers[1]} {answers[2]}</p>
        <button className="red" onClick={() => handleClick("red")}>Nope</button>
        <button className="yellow" onClick={() => handleClick("yellow")}>Kinda</button>
        <button className="green" onClick={() => handleClick("green")}>Yep</button>
      </div>
    </>
  );
}
