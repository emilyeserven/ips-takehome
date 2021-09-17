import './App.css';
import React, { useState } from 'react';
import StatesHOC from './components/StatesHOC';
import Guess from './components/Guess';

const App = () => {
  const [tab, setTab] = useState("states");
  
  const handleClick = (button, e) => {
    e.preventDefault();
    setTab(button);
  }
  
  return (
    <div className="App">
      <div className="menu">
        <button className="menu-item" onClick={(e) => handleClick("states", e)}>States</button>
        <button className="menu-item" onClick={(e) => handleClick("guess", e)}>Guess</button>
      </div>
      { tab === "states" ? <StatesHOC /> : <Guess />}
    </div>
  );
}

export default App;
