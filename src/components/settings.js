import { useState } from "react";

import "../styles/settings.css";

export default function Settings({ settings, setSettings, setShowSettings }) {
  const [currSettings, setCurrSettings] = useState(settings);

  const handleCheckbox = (e) => {
    setCurrSettings({ ...currSettings, [e.target.name]: e.target.checked });
  };

  const handleInput = (e) => {
    setCurrSettings({ ...currSettings, [e.target.name]: e.target.value });
  };

  const validateSettings = () => true; // placeholder

  const handleButton = (action) => {
    switch (action) {
      case "save":
        if (validateSettings()) {
          setSettings(currSettings);
        } // falls through
      case "restart":
      case "cancel":
      default:
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
          checked={currSettings["hiragana"]}
          onChange={handleCheckbox}
        />
        <label htmlFor="hiragana">Hiragana</label>
      </div>
      <div className="choice">
        <input
          type="checkbox"
          id="katakana"
          name="katakana"
          checked={currSettings["katakana"]}
          onChange={handleCheckbox}
        />
        <label htmlFor="katakana">Katakana</label>
      </div>
      <p>Include:</p>
      <div className="choice">
        <input
          type="checkbox"
          id="diacritics"
          name="diacritics"
          checked={currSettings["diacritics"]}
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
          checked={currSettings["digraphs"]}
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
          checked={currSettings["wi_we"]}
          onChange={handleCheckbox}
        />
        <label htmlFor="wi_we">
          <span className="japanese">ゐ/ヰ</span> (<i>wi</i>) and{" "}
          <span className="japanese">ゑ/ヱ</span> (<i>we</i>)
        </label>
      </div>
      <div className="choice">
        <input
          type="checkbox"
          id="extended"
          name="extended"
          checked={currSettings["extended"]}
          onChange={handleCheckbox}
        />
        <label htmlFor="extended">
          Extended katakana (<strong>not yet available</strong>)
        </label>
      </div>
      <div className="range">
        <p>
          <label htmlFor="cardsNum">Number of flashcards in deck:</label>
          <input
            type="number"
            id="limit"
            name="limit"
            min="1"
            max="200"
            placeholder={currSettings["limit"]}
            value={currSettings["limit"]}
            onChange={handleInput}
          />
          <span className="note">
            (max. <strong>200</strong>)
          </span>
        </p>
      </div>
      <div className="button-container">
        <button className="green" onClick={() => handleButton("save")}>
          Save
        </button>
        <button className="yellow" onClick={() => handleButton("restart")}>
          Restart
        </button>
        <button className="red" onClick={() => handleButton("cancel")}>
          Cancel
        </button>
      </div>
    </div>
  );
}
