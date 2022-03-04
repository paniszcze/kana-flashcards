import '../styles/header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="title-container">
        <h1 className="title">Kana Flashcards</h1>
        <h2 className="subtitle">Learn Japanese kana with customisable flashcard deck!</h2>
      </div>
      <nav>
        <a href="./">Language</a> | <a href="./">Settings</a> | <a href="./">Info</a>
      </nav>
    </div>
  )
}