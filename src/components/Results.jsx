import { COLORS } from "../utils/constants";
import { contents } from "../utils/contents";

import Progressbar from "./Progressbar";

import "../styles/Results.css";

export default function Results({
  language,
  answers,
  limit,
  restartSession,
  setShowResults,
}) {
  const resultData = answers.map((item, index) => {
    return {
      count: item,
      percentage: Math.floor((item / limit) * 100),
      color: COLORS[index],
    };
  });

  return (
    <div className="Results">
      <h3>{contents.results[language]}</h3>
      <div className="results-container">
        {resultData.map((item, index) => <Progressbar item={item} index={index} />)}
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
