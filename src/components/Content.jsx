import Flashcard from "./Flashcard";
import Dashboard from "./Dashboard";

import "../styles/Content.css";

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
