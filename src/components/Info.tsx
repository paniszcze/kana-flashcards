import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Interweave } from 'interweave';

import { localisation } from '../data/localisation';

export default function Info({ setShowInfo }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="Info">
      <h3>{localisation[language].info}</h3>
      <Interweave content={localisation[language].infoText} />
      <div className="button-container">
        <button className="red" onClick={() => setShowInfo(false)}>
          {localisation[language].close}
        </button>
      </div>
    </div>
  );
}
