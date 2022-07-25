import '../styles/AnswerTile.css';

import Fractionbar from './Fractionbar';

export default function AnswerTile({ kana, details }) {
    return (
        <div className="tile">
            <div className="tile-header japanese">{kana}</div>
            <div className="tile-subheader">{details.translation}</div>
            <Fractionbar stats={[details.negative, details.neutral, details.positive]} />
        </div>
    );
}
