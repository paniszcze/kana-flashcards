import { useState, useEffect } from "react";

import "../styles/settings.css";

const LIMITS = {
  lower: 1,
  upper: 200,
};

export default function Settings({
  settings,
  setSettings,
  setShowSettings,
  count,
  setCount,
  setAnswers,
  changeCard,
}) {
  const [currSettings, setCurrSettings] = useState({ ...settings });
  const [validationErrors, setValidationErrors] = useState({
    syllabary: false,
    extension: false,
    integer: false,
    range: false,
  });

  const ERROR_MESSAGES = {
    syllabary: "At least one kana has to be set!",
    extension:
      "Extension requires katakana, diacritics and digraphs!",
    integer: "Flashcard limit has to be an integer!",
    range: `Flashcard limit must fall within the range of ${
      Math.max(LIMITS.lower, count) + "-" + LIMITS.upper
    }!`,
  };

  useEffect(() => {
    setValidationErrors(() => {
      return {
        syllabary: !currSettings.hiragana && !currSettings.katakana,
        extension:
          (!currSettings.katakana ||
            !currSettings.diacritics ||
            !currSettings.digraphs) &&
          currSettings.extended,
        integer: !Number.isInteger(+currSettings.limit),
        range:
          currSettings.limit > LIMITS.upper ||
          currSettings.limit < Math.max(LIMITS.lower, count),
      };
    });
  }, [currSettings, count]);

  const handleCheckbox = (e) => {
    setCurrSettings({ ...currSettings, [e.target.name]: e.target.checked });
  };

  const handleInput = (e) => {
    setCurrSettings({ ...currSettings, [e.target.name]: e.target.value });
  };

  const isValid = () => {
    for (const error in validationErrors) {
      if (validationErrors[error]) {
        return false;
      }
    }
    return true;
  };

  const hasChanged = (objA, objB) =>
    JSON.stringify(objA) !== JSON.stringify(objB);

  const handleAction = (action) => {
    switch (action) {
      case "save":
        if (!isValid()) {
          break;
        }
        if (hasChanged(settings, currSettings)) {
          setSettings({
            ...currSettings,
            limit: parseInt(currSettings.limit),
          });
          if (count !== currSettings.limit) {
            changeCard();
          }
        } //falls through
      case "restart":
        if (action === "restart") {
          changeCard();
          setCount(0);
          setAnswers([0, 0, 0]);
        } // falls through
      case "cancel":
      default:
        setValidationErrors({
          syllabary: false,
          extension: false,
          integer: false,
          range: false,
        });
        setShowSettings(false);
    }
  };

  return (
    <div className="Settings">
      <h3>Settings</h3>
      <p>Choose syllabary sets to practice:</p>
      <div className="choice">
        <input
          type="checkbox"
          id="hiragana"
          name="hiragana"
          checked={currSettings.hiragana}
          onChange={handleCheckbox}
        />
        <label htmlFor="hiragana">Hiragana</label>
      </div>
      <div className="choice">
        <input
          type="checkbox"
          id="katakana"
          name="katakana"
          checked={currSettings.katakana}
          onChange={handleCheckbox}
        />
        <label htmlFor="katakana">Katakana</label>
      </div>
      {validationErrors.syllabary && (
        <div className="error-message">{ERROR_MESSAGES.syllabary}</div>
      )}
      <p>Include:</p>
      <div className="choice">
        <input
          type="checkbox"
          id="diacritics"
          name="diacritics"
          checked={currSettings.diacritics}
          onChange={handleCheckbox}
        />
        <label htmlFor="diacritics">
          Diacritics (<i>dakuten</i> and <i>handakuten</i>)
        </label>
      </div>
      <div className="choice">
        <input
          type="checkbox"
          id="digraphs"
          name="digraphs"
          checked={currSettings.digraphs}
          onChange={handleCheckbox}
        />
        <label htmlFor="digraphs">
          Digraphs (<i>yō-on</i>)
        </label>
      </div>
      <div className="choice">
        <input
          type="checkbox"
          id="wi_we"
          name="wi_we"
          checked={currSettings.wi_we}
          onChange={handleCheckbox}
        />
        <label htmlFor="wi_we">
          <span className="japanese">ゐ/ヰ</span> (<i>wi</i>) and{" "}
          <span className="japanese">ゑ/ヱ</span> (<i>we</i>)
        </label>
      </div>
      <div
        className={`choice ${
          currSettings.katakana &&
          currSettings.diacritics &&
          currSettings.digraphs
            ? ""
            : " disabled"
        }`}
      >
        <input
          type="checkbox"
          id="extended"
          name="extended"
          checked={currSettings.extended}
          onChange={handleCheckbox}
          disabled={
            currSettings.katakana &&
            currSettings.diacritics &&
            currSettings.digraphs
              ? false
              : true
          }
        />
        <label htmlFor="extended">
          Extended katakana (foreign sounds representation)
        </label>
      </div>
      {validationErrors.extension && (
        <div className="error-message">{ERROR_MESSAGES.extension}</div>
      )}
      <div className="range">
        <p>
          <label htmlFor="cardsNum">Number of flashcards in deck:</label>
          <input
            type="number"
            id="limit"
            name="limit"
            min={LIMITS.lower}
            max={LIMITS.upper}
            placeholder={currSettings.limit}
            value={currSettings.limit}
            onChange={handleInput}
          />
          <span className="note">
            (max. <strong>{LIMITS.upper}</strong>)
          </span>
        </p>
        {validationErrors.integer && (
          <div className="error-message">{ERROR_MESSAGES.integer}</div>
        )}
        {!validationErrors.integer && validationErrors.range && (
          <div className="error-message">{ERROR_MESSAGES.range}</div>
        )}
      </div>
      <div className="button-container">
        <button className="green" onClick={() => handleAction("save")}>
          Save
        </button>
        <button className="yellow" onClick={() => handleAction("restart")}>
          Restart
        </button>
        <button className="red" onClick={() => handleAction("cancel")}>
          Cancel
        </button>
      </div>
    </div>
  );
}
