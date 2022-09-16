import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import { contents } from '../utils/contents';

import '../styles/Footer.css';

export default function Footer() {
    const { language } = useContext(LanguageContext);

    return (
        <footer className="Footer">
            {contents.built[language]}
            <a href="https://github.com/paniszcze/kana-flashcards" rel="noreferrer" target="_blank">
                &#64;paniszcze
            </a>
            , 2022
        </footer>
    );
}
