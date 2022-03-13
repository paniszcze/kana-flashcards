import { useState, useEffect } from "react";

import "../styles/settings.css";

const LIMITS = {
  lower: 1,
  upper: 200,
};

const ERROR_MESSAGES = {
  syllabary: "At least one kana has to be set!",
  extension: "Katakana needs to be chosen in order to study extended kana!",
  integer: "Flashcard limit has to be an integer!",
  range: `Flashcard limit must be within range ${
    LIMITS.lower + "-" + LIMITS.upper
  }!`,
};

export default function Settings({ settings, setSettings, setShowSettings }) {
  const [currSettings, setCurrSettings] = useState(settings);
  const [validationErrors, setValidationErrors] = useState({
    syllabary: false,
    extension: false,
    integer: false,
    range: false,
  });

  useEffect(() => {
    setValidationErrors(() => {
      return {
        syllabary: !currSettings.hiragana && !currSettings.katakana,
        /* TODO: change the logic to include 'katakana' AND 'digraphs' */
        etension: !currSettings.katakana && currSettings.extended,
        integer: !Number.isInteger(+currSettings.limit),
        /* TODO: set lower bound to Math.max(LIMITS.lower, count);
                 'count' needs to be passed from Dashboard) */
        range:
          currSettings.limit > LIMITS.upper ||
          currSettings.limit < LIMITS.lower,
      };
    });
  }, [currSettings]);

  const handleCheckbox = (e) => {
    setCurrSettings({ ...currSettings, [e.target.name]: e.target.checked });
  };

  const handleInput = (e) => {
    /* TODO: prevent the target value from being passed as a string; this cannot be
             done by simply modifying e.target.value, since it hinders typing in the
             input field; ideally, parseInt the limit after validation is completed */
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

  const handleAction = (action) => {
    switch (action) {
      case "save":
        if (!isValid()) {
          break;
        }
        setSettings(currSettings); // falls through
      case "restart":
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
      {/* TODO: characters of extended katakana need to be added to dictionary;
                until then, the checkbox should be disabled */}
      <div className="choice disabled">
        <input
          type="checkbox"
          id="extended"
          name="extended"
          checked={currSettings.extended}
          onChange={handleCheckbox}
          disabled={true}
        />
        <label htmlFor="extended">
          Extended katakana (<strong>not yet available</strong>)
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
