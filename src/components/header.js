import { useState } from "react";

import "../styles/header.css";

const languages = [
  {
    language: "English",
    abbreviation: "EN",
  },
  {
    language: "Polish",
    abbreviation: "PL",
  },
];

export default function Header({ setShowSettings, setShowInfo }) {
  const [language, setLanguage] = useState(languages[0]);
  const [showLanguage, setShowLanguage] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguage((prevShowLanguage) => !prevShowLanguage);
  };

  const changeLanguage = (index) => {
    setLanguage(languages[index]);
    setShowLanguage(false);
  };

  return (
    <header className="Header">
      <div className="title-container">
        <h1 className="title">Kana Flashcards</h1>
        <h2 className="subtitle">
          Learn Japanese kana with customisable flashcard deck!
        </h2>
      </div>
      <nav>
        <div className={`dropdown${showLanguage ? " show" : ""}`}>
          <button className="main-language" onClick={toggleLanguageDropdown}>
            {language.abbreviation}
          </button>
          {showLanguage && (
            <div className="dropdown-content">
              {languages.map((item, index) => (
                <button
                  id={index}
                  key={item.abbreviation}
                  onClick={() => changeLanguage(index)}
                >
                  {item.abbreviation}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setShowSettings(true);
            setShowLanguage(false);
          }}
        >
          Settings
        </button>
        <button
          onClick={() => {
            setShowInfo(true);
            setShowLanguage(false);
          }}
        >
          Info
        </button>
      </nav>
    </header>
  );
}
