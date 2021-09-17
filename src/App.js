import './App.css';
import React, { useState } from 'react';
import States from './components/States';
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
      { tab === "states" ? <States /> : <Guess />}
    </div>
  );
}

export default App;
