import React from 'react';

import { COLORS } from '../utils/constants';

import '../styles/Fractionbar.css';

export default function Fractionbar({ stats }) {
  const sum = stats.reduce((a, b) => a + b, 0);
  const getWidth = (stat) => Math.floor((stat / sum) * 100);

  return (
    <div className="fraction-track">
      {stats.map(
        (stat, index) =>
          !!stat && (
            <div
              className="fraction-bar"
              key={index}
              style={{
                width: `${getWidth(stat)}%`,
                backgroundColor: `${COLORS[index]}`,
              }}></div>
          )
      )}
    </div>
  );
}
