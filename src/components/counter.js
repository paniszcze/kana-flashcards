import "../styles/counter.css";

export default function Counter() {
  return (
    <>
      <div className="counter">
        <div calssName="stats">
          <div className="percent">
            <svg>
              <circle className="base-circle" cx="70" cy="70" r="70"></circle>
              <circle className="red-circle" cx="70" cy="70" r="70"></circle>
              <circle className="yellow-circle" cx="70" cy="70" r="70"></circle>
              <circle className="green-circle" cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
                90%
            </div>
          </div>
        </div>
      </div>
      <div className="assessment">
        <button className="red">Nope</button>
        <button className="yellow">Kinda</button>
        <button className="green">Yep</button>
      </div>
    </>
  );
}
