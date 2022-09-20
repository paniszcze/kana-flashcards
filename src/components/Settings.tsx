import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ScoreContext } from '../contexts/ScoreContext';
import { AnswersTrackContext } from '../contexts/AnswersTrackContext';
import { Interweave } from 'interweave';

import { LIMITS, RESET_VALIDATION_ERRORS } from '../utils/constants';
import { localisation } from '../data/localisation';

import '../styles/Settings.css';

export default function Settings({
  settings,
  setSettings,
  setShowSettings,
  changeCard,
}) {
  const { language } = useContext(LanguageContext);
  const [currSettings, setCurrSettings] = useState({ ...settings });
  const [validationErrors, setValidationErrors] = useState(
    RESET_VALIDATION_ERRORS
  );
  const { setAnswerTrack } = useContext(AnswersTrackContext);
  const { score, setScore } = useContext(ScoreContext);
  const count = score.reduce((a, b) => a + b, 0);

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
    if (action === 'save') {
      if (!isValid()) {
        return;
      }
      if (hasChanged(settings, currSettings)) {
        setSettings({
          ...currSettings,
          limit: parseInt(currSettings.limit),
        });
        if (count !== currSettings.limit) {
          changeCard();
        }
      }
    } else if (action === 'restart') {
      changeCard();
      setScore([0, 0, 0]);
      setAnswerTrack({});
    }

    setValidationErrors(RESET_VALIDATION_ERRORS);
    setShowSettings(false);
  };

  return (
    <div className="Settings">
      <h3>{localisation[language].settings}</h3>
      <p>{localisation[language].syllabary}</p>
      <div className="choice">
        <input
          type="checkbox"
          id="hiragana"
          name="hiragana"
          checked={currSettings.hiragana}
          onChange={handleCheckbox}
        />
        <label htmlFor="hiragana">{localisation[language].hiragana}</label>
      </div>
      <div className="choice">
        <input
          type="checkbox"
          id="katakana"
          name="katakana"
          checked={currSettings.katakana}
          onChange={handleCheckbox}
        />
        <label htmlFor="katakana">{localisation[language].katakana}</label>
      </div>
      {validationErrors.syllabary && (
        <div className="error-message">{localisation[language].syllabary}</div>
      )}
      <p>{localisation[language].include}</p>
      <div className="choice">
        <input
          type="checkbox"
          id="diacritics"
          name="diacritics"
          checked={currSettings.diacritics}
          onChange={handleCheckbox}
        />
        <label htmlFor="diacritics">
          <Interweave content={localisation[language].diacritics} />
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
          <Interweave content={localisation[language].digraphs} />
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
          <Interweave content={localisation[language].wi_we} />
        </label>
      </div>
      <div
        className={`choice ${
          currSettings.katakana &&
          currSettings.diacritics &&
          currSettings.digraphs
            ? ''
            : ' disabled'
        }`}>
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
        <label htmlFor="extended">{localisation[language].extension}</label>
      </div>
      {validationErrors.extension && (
        <div className="error-message">{localisation[language].extension}</div>
      )}
      <div className="range">
        <p>
          <label htmlFor="cardsNum">{localisation[language].limit}</label>
        </p>
        <div className="no-wrap">
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
        </div>
      </div>
      {validationErrors.integer && (
        <div className="error-message">{localisation[language].integer}</div>
      )}
      {!validationErrors.integer && validationErrors.range && (
        <div className="error-message">
          {localisation[language].range}{' '}
          {Math.max(LIMITS.lower, count) + '-' + LIMITS.upper}!
        </div>
      )}
      <div className="button-container">
        <button
          className={isValid() ? 'green' : 'disabled'}
          onClick={() => handleAction('save')}>
          {localisation[language].save}
        </button>
        <button className="yellow" onClick={() => handleAction('restart')}>
          {localisation[language].restart}
        </button>
        <button className="red" onClick={() => handleAction('cancel')}>
          {localisation[language].cancel}
        </button>
      </div>
    </div>
  );
}
