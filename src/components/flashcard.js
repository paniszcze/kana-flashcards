import "../styles/flashcard.css";

export default function Flashcard({ card, flipped, flipFlashcard }) {
  return (
    <div className="Flashcard" onClick={flipFlashcard}>
      <div className={`flipper${flipped ? " flipped" : ""}`}>
        <div className="front japanese">{card.front}</div>
        <div className="back">{card.back}</div>
      </div>
    </div>
  );
}
