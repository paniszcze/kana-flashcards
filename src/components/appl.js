import React, {Component} from 'react';

import Header from './header';
import Content from './content';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}

export default App;
