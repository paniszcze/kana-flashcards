import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Kana Flashcards</h1>
          <p>Learn Japanese kana with customisable flashcards deck</p>
            <nav>
              <a href="./">Settings</a>
              <a href="./">Info</a>
            </nav>
      </header>
    )
  }
}

export default Header;