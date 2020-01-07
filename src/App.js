import React, { useState, useRef } from "react";
import Hand from "./components/hand";
import "./App.css";

function App() {
  // build cards (number and suit)
  // build hands 5 or 3
  // build winning
  const mainHand = useRef();

  return (
    <div className="App">
      <h1>Poker</h1>
      <p>Hands</p>
      <div className="hand">
        <Hand ref={mainHand} />
      </div>
      <button
        className="drawBtn"
        onClick={() => mainHand.current.doDraw()}>Draw</button>
    </div>
  );
}

export default App;
