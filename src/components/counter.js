import '../styles/counter.css';

export default function Counter() {
  return (
    <>
      <div className="counter">Counter:</div>
      <div className="assessment">
        <button className="red">Nope</button>
        <button className="yellow">Kinda</button>
        <button className="green">Yep</button>
      </div>
    </>
  )
};