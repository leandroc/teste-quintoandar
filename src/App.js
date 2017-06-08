import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

class App extends Component {
  menuHandler = (e) => {
    let menuList = e.target.nextSibling;

    menuList.classList.toggle('open');
  }

  render() {
    return (
      <main className="App">
        <Header menuHandler={this.menuHandler} />

        <Home />

        <Footer />
      </main>
    );
  }
}

export default App;
