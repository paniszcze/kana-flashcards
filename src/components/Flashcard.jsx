import "../styles/flashcard.css";

export default function Flashcard({ card, flipped, flipFlashcard }) {
  return (
    <div className={`Flashcard${flipped ? " flipped" : ""}`} onClick={flipFlashcard}>
      <div className="front japanese">{card.front}</div>
      <div className="back">{card.back}</div>
    </div>
  );
}
