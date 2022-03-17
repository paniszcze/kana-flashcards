import Flashcard from "./flashcard.js";
import Dashboard from "./dashboard.js";

import "../styles/content.css";

export default function Content({
  language,
  settings,
  count,
  setCount,
  answers,
  setAnswers,
  flipped,
  flipFlashcard,
  card,
  changeCard,
}) {
  return (
    <main className="Content">
      <Flashcard card={card} flipped={flipped} flipFlashcard={flipFlashcard} />
      <Dashboard
        language={language}
        changeCard={changeCard}
        limit={settings.limit}
        count={count}
        setCount={setCount}
        answers={answers}
        setAnswers={setAnswers}
      />
    </main>
  );
}
