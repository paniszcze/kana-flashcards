import { useState } from "react";

import * as Hiragana from "../data/hiragana";
import * as Katakana from "../data/katakana";

import Flashcard from "./flashcard.js";
import Dashboard from "./dashboard.js";

import "../styles/content.css";

const deck = [...Hiragana.basic, ...Katakana.basic].map((item) => {
  return { front: item.kana, back: item.romaji };
});

const chooseRandomCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
};

export default function Content({ settings }) {
  const [flipped, setFlipped] = useState(false);
  const [card, setCard] = useState(chooseRandomCard(deck));

  const flipFlashcard = () => {
    setFlipped((prevFlipped) => !prevFlipped);
  };

  const changeCard = () => {
    let newCard = chooseRandomCard(deck);

    if (flipped) {
      setCard((prevCard) => {
        return {
          front: newCard.front,
          back: prevCard.back,
        };
      });
      flipFlashcard();
      setTimeout(() => setCard(newCard), 200);
    } else {
      setCard(newCard);
    }
  };

  return (
    <main className="Content">
      <Flashcard card={card} flipped={flipped} flipFlashcard={flipFlashcard} />
      <Dashboard changeCard={changeCard} limit={settings.limit} />
    </main>
  );
}
