import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ScoreContext } from '../contexts/ScoreContext';
import { AnswersTrackContext } from '../contexts/AnswersTrackContext';

import { contents } from '../utils/contents';

import Modal from './Modal';
import Results from './Results';
import Counter from './Counter';

import '../styles/Dashboard.css';

export default function Dashboard({ card, changeCard, limit }) {
    const { language } = useContext(LanguageContext);
    const [showResults, setShowResults] = useState(false);
    const { answerTrack, setAnswerTrack } = useContext(AnswersTrackContext);
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
            setAnswerTrack((prevTrack) => {
                let newTrack = { ...answerTrack };
                if (!newTrack[card.front]) {
                    newTrack[card.front] = {
                        translation: card.back,
                        positive: 0,
                        neutral: 0,
                        negative: 0,
                    };
                }
                switch (label) {
                    case 'red':
                        newTrack[card.front].negative++;
                        break;
                    case 'yellow':
                        newTrack[card.front].neutral++;
                        break;
                    case 'green':
                        newTrack[card.front].positive++;
                        break;
                    default:
                        return prevTrack;
                }
                return newTrack;
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
        setAnswerTrack({});
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
                        limit={limit}
                        restartSession={restartSession}
                        setShowResults={setShowResults}
                    />
                </Modal>
            )}
        </div>
    );
}
