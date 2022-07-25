import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';
import { AnswersTrackContext } from '../contexts/AnswersTrackContext';

import { COLORS } from '../utils/constants';
import { contents } from '../utils/contents';

import Progressbar from './Progressbar';
import AnswerTile from './AnswerTile';

import '../styles/Results.css';

export default function Results({ language, limit, restartSession, setShowResults }) {
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
        <div className="Results">
            <h3>{contents.results[language]}</h3>
            <div className="results-container">
                {resultData.map((item, index) => (
                    <Progressbar key={index} item={item} />
                ))}
            </div>
            <div className="answer-tiles">
                {Object.entries(answerTrack).map(([kana, details], index) => (
                    <AnswerTile key={index} kana={kana} details={details} />
                ))}
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
