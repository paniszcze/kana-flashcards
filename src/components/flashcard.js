import '../styles/flashcard.css';

export default function Flashcard({ flipped, flipFlashcard }) {

  return (
    <div className="flashcard" onClick={flipFlashcard}>
      <div className={flipped ? "flipped" : ""}>
        <div className="front">
          front
        </div>
        <div className="back">
          back
        </div>
      </div>
    </div>
  )
};