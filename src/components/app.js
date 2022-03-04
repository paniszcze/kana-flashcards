import { useState } from 'react';

import Header from './header';
import Content from './content';
import Footer from './footer';
import Modal from './modal';
import Settings from './settings';
import Info from './info';

import '../styles/app.css';

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="App">
      <Header setShowSettings={setShowSettings} setShowInfo={setShowInfo} />
      <Content />
      <Footer />

      {showSettings && (
        <Modal>
          <Settings />
          <div className="button-container">
            <button>Save</button>
            <button onClick={() => setShowSettings(false)}>Close</button>
          </div>
        </Modal>
      )}

      {showInfo && (
        <Modal>
          <Info />
          <button onClick={() => setShowInfo(false)}>Close</button>
        </Modal>
      )}
    </div>
  ) 
};