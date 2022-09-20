import React, { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

import { STROKE, RADIUS, CIRCUMFERENCE, COLORS } from '../utils/constants';

import '../styles/Counter.css';

const getDashoffset = (array, start, limit) => {
  let sum = array.slice(start).reduce((a, b) => a + b, 0);
  return CIRCUMFERENCE - Math.floor((sum / limit) * CIRCUMFERENCE);
};

export default function Counter({ limit }) {
  const { score } = useContext(ScoreContext);
  const count = score.reduce((a, b) => a + b, 0);

  return (
    <div className="counter">
      <svg viewBox="0 0 100 100">
        <circle
          style={{
            strokeWidth: `${STROKE}`,
          }}
          cx="50"
          cy="50"
          r={RADIUS}></circle>
        {Array.from(Array(score.length).keys()).map((index) => (
          <circle
            key={index}
            style={{
              stroke: `${COLORS[index]}`,
              strokeWidth: `${STROKE}`,
              strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
              strokeDashoffset: `${
                count ? getDashoffset(score, index, limit) : CIRCUMFERENCE
              }`,
            }}
            cx="50"
            cy="50"
            r={RADIUS}></circle>
        ))}
      </svg>
      <div className="number">
        <div className="statbox">
          {count}
          <div className="statbox-text">
            {score.map((item, index) => (
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
