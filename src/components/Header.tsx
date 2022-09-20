import React, { useRef, useContext, useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { LanguageContext } from '../contexts/LanguageContext';
import { languages, localisation } from '../data/localisation';

import Modal from './Modal';
import Settings from './Settings';
import Info from './Info';

import '../styles/Header.css';

export default function Header({ settings, setSettings, changeCard }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const languageButtonRef = useRef<HTMLButtonElement>(null);
  useClickOutside({ ref: languageButtonRef, onClose: setShowLanguage });

  const toggleLanguageDropdown = () => {
    setShowLanguage((prevShowLanguage) => !prevShowLanguage);
  };

  return (
    <header>
      <div className="title-container">
        <h1 className="title">{localisation[language].title}</h1>
        <h2 className="subtitle">{localisation[language].subtitle}</h2>
      </div>
      <nav>
        <div className={`dropdown${showLanguage ? ' show-dropdown' : ''}`}>
          <button
            ref={languageButtonRef}
            className="main-language"
            onClick={toggleLanguageDropdown}>
            {language}
          </button>
          {showLanguage && (
            <div className="dropdown-content">
              {languages.map((item, index) => (
                <button
                  id={`${index}`}
                  key={item.id}
                  onClick={() => setLanguage(languages[index]?.id)}>
                  {item.id}
                </button>
              ))}
            </div>
          )}
        </div>
        <button onClick={() => setShowSettings(true)}>
          {localisation[language].settings}
        </button>
        <button onClick={() => setShowInfo(true)}>
          {localisation[language].info}
        </button>
      </nav>

      {showSettings && (
        <Modal setVisibility={setShowSettings}>
          <Settings
            settings={settings}
            setSettings={setSettings}
            setShowSettings={setShowSettings}
            changeCard={changeCard}
          />
        </Modal>
      )}

      {showInfo && (
        <Modal setVisibility={setShowInfo}>
          <Info setShowInfo={setShowInfo} />
        </Modal>
      )}
    </header>
  );
}
