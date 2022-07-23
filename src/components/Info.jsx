import { Interweave } from "interweave";

import { contents } from "../assets/contents";

import "../styles/info.css";

export default function Info({ language, setShowInfo }) {
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
