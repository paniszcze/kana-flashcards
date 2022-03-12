import "../styles/info.css";

export default function Info({ setShowInfo }) {
  return (
    <div className="Info">
      <h3>Info</h3>
      <p>
        Welcome to <strong>Kana Flashcards</strong> – a simple web app for
        learning Japanese kana readings with customisable flashcard deck!
      </p>
      <p>
        Go to <strong>Settings</strong> to customise your deck and start
        learning!
      </p>
      <div className="button-container">
        <button className="red" onClick={() => setShowInfo(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
