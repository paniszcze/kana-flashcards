import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Interweave } from 'interweave';

import { contents } from '../utils/contents';

export default function Info({ setShowInfo }) {
    const { language } = useContext(LanguageContext);

    return (
        <div className="Info">
            <h3>{contents.info[language]}</h3>
            <Interweave content={contents.infoText[language]} />
            <div className="button-container">
                <button className="red" onClick={() => setShowInfo(false)}>
                    {contents.close[language]}
                </button>
            </div>
        </div>
    );
}
