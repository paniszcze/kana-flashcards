import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ScoreContext } from "./contexts/ScoreContext";

import { INITIAL_LANGUAGE, INITIAL_SETTINGS } from "./utils/constants";
import { generateDeck, chooseRandomCard } from "./utils/deck";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./styles/App.css";

export default function App() {
  const [language, setLanguage] = useLocalStorage("language", INITIAL_LANGUAGE);
  const [settings, setSettings] = useLocalStorage("settings", INITIAL_SETTINGS);
  const [score, setScore] = useState([0, 0, 0]);
  const [flipped, setFlipped] = useState(false);
  const [deck, setDeck] = useState(generateDeck(settings));
  const [card, setCard] = useState(chooseRandomCard(deck));

  useEffect(() => {
    setDeck(generateDeck(settings));
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
      <ScoreContext.Provider value={{ score, setScore }}>
        <Header
          language={language}
          setLanguage={setLanguage}
          settings={settings}
          setSettings={setSettings}
          changeCard={changeCard}
        />
        <Content
          language={language}
          settings={settings}
          flipped={flipped}
          flipFlashcard={flipFlashcard}
          card={card}
          changeCard={changeCard}
        />
        <Footer language={language} />
      </ScoreContext.Provider>
    </div>
  );
}
