import { useState } from 'react';

import '../styles/counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState([0, 0, 0]);

  console.log(count, colors);

  const handleClick = (color) => {
    setCount (prevCount => {
      return prevCount + 1;
    });

    setColors (prevColors => {
      let newColors = [...prevColors];
      switch (color) {
        case "red":
          newColors[0] += 1;
          break;
        case "yellow":
          newColors[1] += 1;
          break;
        case "green":
          newColors[2] += 1;
          break;
        default:
          return prevColors;
      }
      return newColors;
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
        <p>{colors[0]} {colors[1]} {colors[2]}</p>
        <button className="red" onClick={() => handleClick("red")}>Nope</button>
        <button className="yellow" onClick={() => handleClick("yellow")}>Kinda</button>
        <button className="green" onClick={() => handleClick("green")}>Yep</button>
      </div>
    </>
  );
}
