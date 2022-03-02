import { useState } from 'react';

import Flashcard from './flashcard.js';
import Counter from './counter.js';
import Assessment from './assessment.js';

import '../styles/content.css';

export default function Content() {
  const [flipped, setFlipped] = useState(false);

  const flipFlashcard = () => {
    setFlipped(!flipped);
  };

  const card = {
    front: "か",
    back: "ka"
  }

  return (
    <div className="container">
      <Flashcard card={card} flipped={flipped} flipFlashcard={flipFlashcard} />
      <div className="dashboard">
        <Counter />
        <Assessment />
      </div>
    </div>
  )
}