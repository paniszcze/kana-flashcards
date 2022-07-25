import { useState, useEffect, useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

import { contents } from '../utils/contents';

import Modal from './Modal';
import Results from './Results';
import Counter from './Counter';

import '../styles/Dashboard.css';

export default function Dashboard({ language, changeCard, limit }) {
    const [showResults, setShowResults] = useState(false);
    const { score, setScore } = useContext(ScoreContext);
    const count = score.reduce((a, b) => a + b, 0);

    useEffect(() => {
        if (count >= limit) {
            setShowResults(true);
        }
    }, [count, limit]);

    const handleClick = (label) => {
        if (count < limit) {
            setScore((prevScore) => {
                let newScore = [...prevScore];
                switch (label) {
                    case 'red':
                        newScore[0] += 1;
                        break;
                    case 'yellow':
                        newScore[1] += 1;
                        break;
                    case 'green':
                        newScore[2] += 1;
                        break;
                    default:
                        return prevScore;
                }
                return newScore;
            });
            if (count < limit - 1) {
                changeCard();
            }
        } else {
            setShowResults(true);
        }
    };

    const restartSession = () => {
        setScore([0, 0, 0]);
        changeCard();
        setShowResults(false);
    };

    return (
        <div className="Dashboard">
            <Counter limit={limit} />
            <div className="assessment">
                <button className="red" onClick={() => handleClick('red')}>
                    {contents.negative[language]}
                </button>
                <button className="yellow" onClick={() => handleClick('yellow')}>
                    {contents.neutral[language]}
                </button>
                <button className="green" onClick={() => handleClick('green')}>
                    {contents.positive[language]}
                </button>
            </div>

            {showResults && (
                <Modal setVisibility={setShowResults}>
                    <Results
                        language={language}
                        limit={limit}
                        restartSession={restartSession}
                        setShowResults={setShowResults}
                    />
                </Modal>
            )}
        </div>
    );
}
