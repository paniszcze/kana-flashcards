import { STROKE, RADIUS, CIRCUMFERENCE } from "../utils/constants";
import { getDashoffset } from "../utils/counter";

export default function Counter({count, answers, limit}) {
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
  );
}
