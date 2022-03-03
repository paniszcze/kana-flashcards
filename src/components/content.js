import { useState } from 'react';

import { hiragana } from '../data/hiragana';
import { katakana } from '../data/katakana';

import Flashcard from './flashcard.js';
import Counter from './counter.js';

import '../styles/content.css';

export default function Content() {
  const [flipped, setFlipped] = useState(false);
  const [card, setCard] = useState({front: "let's", back: "begin!"});

  const flipFlashcard = () => {
    if (flipped) {
      let randomCard = chooseRandomCard(deck);
      setCard(randomCard);
    }
    setFlipped(!flipped);
  };

  const deck = [...hiragana, ...katakana].map(item => {
    return {front: item.kana, back: item.romaji};
  });

  const chooseRandomCard = (deck) => {
    let randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
  }

  return (
    <div className="container">
      <Flashcard card={card} flipped={flipped} flipFlashcard={flipFlashcard} />
      <div className="dashboard">
        <Counter />
      </div>
    </div>
  )
}
