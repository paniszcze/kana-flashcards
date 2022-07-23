import { useState } from "react";

import { languages, contents } from "../assets/contents";

import Modal from "./Modal";
import Settings from "./Settings";
import Info from "./Info";

import "../styles/header.css";

export default function Header({
  language,
  setLanguage,
  settings,
  setSettings,
  count,
  setCount,
  setAnswers,
  changeCard,
}) {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguage((prevShowLanguage) => !prevShowLanguage);
  };

  const changeLanguage = (index) => {
    setLanguage(languages[index].id);
    setShowLanguage(false);
  };

  return (
    <header className="Header">
      <div className="title-container">
        <h1 className="title">{contents.title[language]}</h1>
        <h2 className="subtitle">{contents.subtitle[language]}</h2>
      </div>
      <nav>
        <div className={`dropdown${showLanguage ? " show-dropdown" : ""}`}>
          <button className="main-language" onClick={toggleLanguageDropdown}>
            {language}
          </button>
          {showLanguage && (
            <div className="dropdown-content">
              {languages.map((item, index) => (
                <button
                  id={index}
                  key={item.id}
                  onClick={() => changeLanguage(index)}
                >
                  {item.id}
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
          {contents.settings[language]}
        </button>
        <button
          onClick={() => {
            setShowInfo(true);
            setShowLanguage(false);
          }}
        >
          {contents.info[language]}
        </button>
      </nav>

      {showSettings && (
        <Modal setVisibility={setShowSettings}>
          <Settings
            language={language}
            settings={settings}
            setSettings={setSettings}
            setShowSettings={setShowSettings}
            count={count}
            setCount={setCount}
            setAnswers={setAnswers}
            changeCard={changeCard}
          />
        </Modal>
      )}

      {showInfo && (
        <Modal setVisibility={setShowInfo}>
          <Info language={language} setShowInfo={setShowInfo} />
        </Modal>
      )}
    </header>
  );
}
