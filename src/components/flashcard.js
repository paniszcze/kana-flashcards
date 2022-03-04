import '../styles/flashcard.css';

export default function Flashcard({ card, flipped, flipFlashcard }) {

  return (
    <div className="Flashcard" onClick={flipFlashcard}>
      <div className={flipped ? "flipped" : ""}>
        <div className="flipper">
          <div className="front">
            <span className="japanese">{card.front}</span>
          </div>
          <div className="back">
            {card.back}
          </div>
        </div>
      </div>
    </div>
  )
};