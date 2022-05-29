import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';
import "./App.css";

function App(props) {
  return (
    <>
        <Header />
        <Shop />
        <Footer />
    </>
  );
}

export default App;