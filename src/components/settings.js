import '../styles/settings.css';

export default function Settings() {
  return (
    <div className="Settings">
      <h3>Settings</h3>
      <p>Choose kana sets to practice:</p>
      <div className="choice">
        <input type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">Hiragana</label>
      </div>
      <div className="choice">
        <input type="checkbox" id="horns" name="horns" />
        <label htmlFor="horns">Katakana</label>
      </div>
    </div>
  )
}