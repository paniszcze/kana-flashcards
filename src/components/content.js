import { useState } from 'react';
import '../styles/main.css';

export default function Content() {
  return (
    <div className="container">
      <div className="card" id="card">
        <div className="front">
          front
        </div>
        <div className="back">
          back
        </div>
      </div>
    </div>
  )
}