import "../styles/results.css";

const convertToProgressbar = (item, index) => {
  let style = {
    width: `${item.percentage}%`,
    backgroundColor: `${item.count !== 0 ? item.color : "transparent"}`,
  };

  return (
    <div className="result-track" key={index}>
      <div className="result-bar" style={style}>
        {item.count}
      </div>
    </div>
  );
};

export default function Results({ answers, limit, setShowResults }) {
  const colors = ["#C23866", "#FED766", "#8FB339"];
  const resultData = answers.map((item, index) => {
    return {
      count: item,
      percentage: Math.floor((item / limit) * 100),
      color: colors[index],
    };
  });

  return (
    <div className="Results">
      <h3>Results:</h3>
      <div className="results-container">
        {resultData.map((item, index) => convertToProgressbar(item, index))}
      </div>
      <div className="button-container">
        <button className="yellow">Restart</button>
        <button className="red" onClick={() => setShowResults(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
