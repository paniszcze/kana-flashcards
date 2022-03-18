import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { INITIAL_LANGUAGE, INITIAL_SETTINGS } from "../utils/constants";
import { generateDeck, chooseRandomCard } from "../utils/deck";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import "../styles/app.css";

export default function App() {
  const [language, setLanguage] = useLocalStorage("language", INITIAL_LANGUAGE);
  const [settings, setSettings] = useLocalStorage("settings", INITIAL_SETTINGS);
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([0, 0, 0]);
  const [flipped, setFlipped] = useState(false);
  const [deck, setDeck] = useState(generateDeck(settings));
  const [card, setCard] = useState(chooseRandomCard(deck));

  useEffect(() => {
    setDeck([...generateDeck(settings)]);
  }, [settings]);

  const flipFlashcard = () => {
    setFlipped((prevFlipped) => !prevFlipped);
  };

  const changeCard = () => {
    let newCard;

    do {
      newCard = chooseRandomCard(deck);
    } while (newCard.front === card.front);

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
        language={language}
        setLanguage={setLanguage}
        settings={settings}
        setSettings={setSettings}
        count={count}
        setCount={setCount}
        setAnswers={setAnswers}
        changeCard={changeCard}
      />
      <Content
        language={language}
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
      <Footer language={language} />
    </div>
  );
}
