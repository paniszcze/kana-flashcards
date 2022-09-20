import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { localisation } from '../data/localisation';

import '../styles/Footer.css';

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="Footer">
      {localisation[language].built}
      <a
        href="https://github.com/paniszcze/kana-flashcards"
        rel="noreferrer"
        target="_blank">
        paniszcze
      </a>
      , 2022
    </footer>
  );
}
