import { convertToProgressbar } from "../utils/progressbar";

import { contents } from "../utils/contents";

import "../styles/Results.css";

export default function Results({
  language,
  answers,
  limit,
  restartSession,
  setShowResults,
}) {
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
      <h3>{contents.results[language]}</h3>
      <div className="results-container">
        {resultData.map((item, index) => convertToProgressbar(item, index))}
      </div>
      <div className="button-container">
        <button className="yellow" onClick={restartSession}>
          {contents.restart[language]}
        </button>
        <button className="red" onClick={() => setShowResults(false)}>
          {contents.close[language]}
        </button>
      </div>
    </div>
  );
}
