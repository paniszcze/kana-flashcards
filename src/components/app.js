import { useState } from "react";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import "../styles/app.css";

export default function App() {
  const [settings, setSettings] = useState({
    hiragana: true,
    katakana: true,
    diacritics: false,
    digraphs: false,
    wi_we: false,
    extended: false,
    limit: 50,
  });

  return (
    <div className="App">
      <Header settings={settings} setSettings={setSettings} />
      <Content settings={settings} />
      <Footer />
    </div>
  );
}
