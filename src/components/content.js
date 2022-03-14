import { useState, useEffect } from "react";

import * as Hiragana from "../data/hiragana";
import * as Katakana from "../data/katakana";

import Flashcard from "./flashcard.js";
import Dashboard from "./dashboard.js";

import "../styles/content.css";

const generateDict = (settings) => {
  let newDict = [];
  if (settings.hiragana) {
    newDict.push(...Hiragana.basic);
    if (settings.diacritics) {
      newDict.push(...Hiragana.diacritics);
    }
    if (settings.digraphs) {
      newDict.push(...Hiragana.digraphs);
    }
    if (settings.digraphs && settings.diacritics) {
      newDict.push(...Hiragana.diacritic_digraphs);
    }
    if (settings.wi_we) {
      newDict.push(...Hiragana.wi_we);
    }
  }
  if (settings.katakana) {
    newDict.push(...Katakana.basic);
    if (settings.diacritics) {
      newDict.push(...Katakana.diacritics);
    }
    if (settings.digraphs) {
      newDict.push(...Katakana.digraphs);
    }
    if (settings.digraphs && settings.diacritics) {
      newDict.push(...Katakana.diacritic_digraphs);
    }
    if (settings.wi_we) {
      newDict.push(...Katakana.wi_we);
    }
    if (settings.extended) {
      // TODO: add entries from extended katakana once they exist
    }
  }
  return newDict;
};

const mapToDeck = (dict) =>
  dict.map((item) => {
    return { front: item.kana, back: item.romaji };
  });

const chooseRandomCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
};

const deck = mapToDeck([...Hiragana.basic, ...Katakana.basic]);

export default function Content({
  settings,
  count,
  setCount,
  answers,
  setAnswers,
}) {
  const [flipped, setFlipped] = useState(false);
  const [card, setCard] = useState(chooseRandomCard(deck));

  useEffect(() => {
    deck.splice(0, deck.length, ...mapToDeck(generateDict(settings)));
  }, [settings]);

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
      <Dashboard
        changeCard={changeCard}
        limit={settings.limit}
        count={count}
        setCount={setCount}
        answers={answers}
        setAnswers={setAnswers}
      />
    </main>
  );
}
