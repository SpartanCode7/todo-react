import './App.scss';
import React from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App(props) {
  return (
    <div className="Cxc__App">
      <Header val="Header" />
      <Body />
    </div>
  );
}

export default App;
