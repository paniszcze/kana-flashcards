import "../styles/settings.css";

export default function Settings() {
  return (
    <div className="Settings">
      <h3>Settings</h3>
      <p>Choose syllabary sets to practice:</p>
      <div className="choice">
        <input type="checkbox" id="hiragana" name="hitagana" defaultChecked />
        <label htmlFor="hiragana">Hiragana</label>
      </div>
      <div className="choice">
        <input type="checkbox" id="katakana" name="katakana" defaultChecked />
        <label htmlFor="katakana">Katakana</label>
      </div>
      <p>Include:</p>
      <div className="choice">
        <input type="checkbox" id="diacritics" name="diacritics" />
        <label htmlFor="diacritics">
          Diacritics (<i>dakuten</i> and <i>handakuten</i>)
        </label>
      </div>
      <div className="choice">
        <input type="checkbox" id="digraphs" name="digraphs" />
        <label htmlFor="digraphs">
          Digraphs (<i>yō-on</i>)
        </label>
      </div>
      <div className="choice">
        <input type="checkbox" id="wiwe" name="wiwe" />
        <label htmlFor="wiwe">
          <span className="japanese">ゐ/ヰ</span> (<i>wi</i>) and{" "}
          <span className="japanese">ゑ/ヱ</span> (<i>we</i>)
        </label>
      </div>
      <div className="choice">
        <input type="checkbox" id="extended" name="extended" />
        <label htmlFor="extended">
          Extended katakana (<strong>not yet available</strong>)
        </label>
      </div>
      <div className="range">
        <p>
          <label htmlFor="cardsNum">Number of flashcards in deck:</label>
          <input type="number" id="cardsNum" name="cardsNum" min="1" max="200" placeholder="1" />
          <span className="note">(max. <strong>200</strong>)</span>
        </p>
      </div>
    </div>
  );
}
