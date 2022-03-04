import '../styles/header.css';

export default function Header({ setShowSettings, setShowInfo }) {
  return (
    <div className="Header">
      <div className="title-container">
        <h1 className="title">Kana Flashcards</h1>
        <h2 className="subtitle">Learn Japanese kana with customisable flashcard deck!</h2>
      </div>
      <nav>
        <button>Language</button>
        <button onClick={() => setShowSettings(true)}>Settings</button>
        <button onClick={() => setShowInfo(true)}>Info</button>
      </nav>
    </div>
  )
}