import React from 'react';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

export default class App extends React.Component {
    render() {
        return (
          <div className="App">
          <Header />
          <Main />
          <Footer />
          </div>
        )
    }
}
