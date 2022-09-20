import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ScoreContext } from '../contexts/ScoreContext';
import { AnswersTrackContext } from '../contexts/AnswersTrackContext';

import { COLORS } from '../utils/constants';
import { localisation } from '../data/localisation';

import Progressbar from './Progressbar';
import AnswerTile from './AnswerTile';

import '../styles/Results.css';

export default function Results({ limit, restartSession, setShowResults }) {
  const { language } = useContext(LanguageContext);
  const { answerTrack } = useContext(AnswersTrackContext);
  const { score } = useContext(ScoreContext);
  const resultData = score.map((item, index) => {
    return {
      count: item,
      percentage: Math.floor((item / limit) * 100),
      color: COLORS[index],
    };
  });

  return (
    <section>
      <h3>{localisation[language].results}</h3>
      <div className="progress-bars">
        {resultData.map((item, index) => (
          <Progressbar key={index} item={item} />
        ))}
      </div>
      <details>
        <summary>{localisation[language].details}</summary>
        <div className="answer-tiles">
          {Object.entries(answerTrack).map(([kana, details], index) => (
            <AnswerTile key={index} kana={kana} details={details} />
          ))}
        </div>
      </details>
      <div className="button-container">
        <button className="yellow" onClick={restartSession}>
          {localisation[language].restart}
        </button>
        <button className="red" onClick={() => setShowResults(false)}>
          {localisation[language].close}
        </button>
      </div>
    </section>
  );
}
