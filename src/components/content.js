import { useState } from 'react';

import { hiragana } from '../data/hiragana';
import { katakana } from '../data/katakana';

import Flashcard from './flashcard.js';
import Counter from './counter.js';

import '../styles/content.css';

const deck = [...hiragana, ...katakana].map(item => {
  return {front: item.kana, back: item.romaji};
});

export default function Content() {
  const [flipped, setFlipped] = useState(false);
  const [card, setCard] = useState({front: "let's", back: "begin!"});
  
  const flipFlashcard = () => {
    setFlipped(prevFlipped => !prevFlipped);
  };

  const chooseRandomCard = (deck) => {
    let randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
  }

  const changeCard = () => {
    let newCard = chooseRandomCard(deck);

    if (flipped) {
      setCard(prevCard => {return {
        front: newCard.front,
        back: prevCard.back
      }});
      flipFlashcard();
      setTimeout(() => setCard(newCard), 200);
    } else {
      setCard(newCard);
    }
  }

  return (
    <div className="container">
      <Flashcard card={card} flipped={flipped} flipFlashcard={flipFlashcard} />
      <div className="dashboard">
        <Counter changeCard={changeCard} />
      </div>
    </div>
  )
}
