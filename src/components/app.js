import { useState, useEffect } from "react";

import * as Hiragana from "../data/hiragana";
import * as Katakana from "../data/katakana";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import "../styles/app.css";

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

export default function App() {
  const [settings, setSettings] = useState({
    hiragana: true,
    katakana: true,
    diacritics: false,
    digraphs: false,
    wi_we: false,
    extended: false,
    limit: 50,
  });
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([0, 0, 0]);
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
    <div className="App">
      <Header
        settings={settings}
        setSettings={setSettings}
        count={count}
        setCount={setCount}
        setAnswers={setAnswers}
        changeCard={changeCard}
      />
      <Content
        settings={settings}
        count={count}
        setCount={setCount}
        answers={answers}
        setAnswers={setAnswers}
        flipped={flipped}
        flipFlashcard={flipFlashcard}
        card={card}
        changeCard={changeCard}
      />
      <Footer />
    </div>
  );
}
