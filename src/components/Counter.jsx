import { STROKE, RADIUS, CIRCUMFERENCE, COLORS } from "../utils/constants";
import { getDashoffset } from "../utils/counter";

import "../styles/Counter.css";

export default function Counter({ count, answers, limit }) {
  return (
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
        {[...Array(answers.length).keys()].map((index) => (
          <circle
            key={index}
            style={{
              stroke: `${COLORS[index]}`,
              strokeWidth: `${STROKE}`,
              strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
              strokeDashoffset: `${
                count ? getDashoffset(answers, index, limit) : CIRCUMFERENCE
              }`,
            }}
            cx="50"
            cy="50"
            r={RADIUS}
          ></circle>
        ))}
      </svg>
      <div className="number">
        <div className="statbox">
          {count}
          <div className="statbox-text">
            {answers.map((item, index) => (
              <div key={index} style={{ color: `${COLORS[index]}` }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
