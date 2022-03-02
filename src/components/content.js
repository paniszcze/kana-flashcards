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

  return (
    <div className="container">
      <Flashcard flipped={flipped} flipFlashcard={flipFlashcard} />
      <div className="dashboard">
        <Counter />
        <Assessment />
      </div>
    </div>
  )
}