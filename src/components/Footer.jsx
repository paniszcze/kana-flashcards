import { contents } from "../assets/contents";

import "../styles/footer.css";

export default function Footer({ language }) {
  return (
    <footer className="Footer">
      {contents.built[language]}
      <a
        href="https://github.com/paniszcze/kana-flashcards"
        rel="noreferrer"
        target="_blank"
      >
        &#64;paniszcze
      </a>
      , 2022
    </footer>
  );
}
