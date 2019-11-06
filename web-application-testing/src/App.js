import React, { useState } from "react";

import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

import "./App.css";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ball = () => {
    if (balls === 4) {
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const strike = () => {
    if (strikes === 3) {
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    setBalls(0);
    setStrikes(0);
  };

  const foul = () => {
    if (strikes === 0) {
      setStrikes(strikes + 1);
    } else if (strikes === 1) {
      setStrikes(strikes + 2);
    } else if (strikes === 2) {
      setStrikes(strikes);
    }
  };

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard foul={foul} hit={hit} ball={ball} strike={strike} />
    </div>
  );
}

export default App;
