import { useState } from 'react';

import '../styles/counter.css';

export default function Counter({ changeCard }) {
  const [limit, setLimit] = useState(200);
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([0, 0, 0]);

  const handleAnswer = (answer) => {
    if (count < limit) {
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

        setCount (() => {
          return newAnswers.reduce((sum, a) => sum + a, 0);
        });

        return newAnswers;
      });

      changeCard();
    }
  }

  return (
    <>
      <div className="count">
        <svg>
          <circle className="base-circle" cx="70" cy="70" r="70"></circle>
          <circle className="red-circle" 
            style={{strokeDashoffset: `${count ? 440 - Math.floor(answers[0] / limit * 440)
              - Math.floor(answers[1] / limit * 440) - Math.floor(answers[2] / limit * 440) : 440}px`}}
            cx="70" cy="70" r="70">
          </circle>
          <circle className="yellow-circle" 
            style={{strokeDashoffset: `${count ? 440 - Math.floor(answers[1] / limit * 440) 
              - Math.floor(answers[2] / limit * 440) : 440}px`}}
            cx="70" cy="70" r="70">
          </circle>
          <circle
            className="green-circle"
            style={{strokeDashoffset: `${count ? 440 - Math.floor(answers[2] / limit * 440) : 440}px`}}
            cx="70" cy="70" r="70">
          </circle>
        </svg>
        <div className="number">
          <div className="statbox">{count}
            <div className="statbox-text">
              <div className="redtext">{answers[0]}</div>
              <div className="yellowtext">{answers[1]}</div>
              <div className="greentext">{answers[2]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="assessment">
        
        <button className="red" onClick={() => handleAnswer("red")}>Nope</button>
        <button className="yellow" onClick={() => handleAnswer("yellow")}>Kinda</button>
        <button className="green" onClick={() => handleAnswer("green")}>Yep</button>
      </div>
    </>
  );
}
