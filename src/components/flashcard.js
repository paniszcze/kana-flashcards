import '../styles/flashcard.css';

export default function Flashcard({ card, flipped, flipFlashcard }) {

  return (
    <div className="flashcard" onClick={flipFlashcard}>
      <div className={flipped ? "flipped" : ""}>
        <div className="flipper">
          <div className="front">
            {card.front}
          </div>
          <div className="back">
            {card.back}
          </div>
        </div>
      </div>
    </div>
  )
};