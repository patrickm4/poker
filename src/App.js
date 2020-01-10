import React, { useState, useRef } from "react";
import Hand from "./components/hand";
import "./App.css";

function App() {
  // build cards (number and suit)
  // build hands 5 or 3
  // build winning
  // let drawNumber = 0
  const [drawNumber, setdrawNumber] = useState(0)
  const mainHand = useRef();
  const [mainBtn, setMainBtn] = useState('Draw')

  // TODO add function so user can only draw twice before needed to reset

  const handleDraw = () =>{
    if(drawNumber === 1){
      console.log("asd")
      setMainBtn('Reset')
    }
    if(drawNumber < 2){
      mainHand.current.doDraw()
      // drawNumber += 1
      setdrawNumber(drawNumber + 1)
    } else {
      setMainBtn('Draw')
      mainHand.current.reDraw()
      setdrawNumber(1)
    }
  }

  const DrawButton = () => {
    return <button
              className="drawBtn"
              onClick={() => {handleDraw()}}>{mainBtn}
            </button>
  }

  return (
    <div className="App">
      <h1>Poker Deuces Wild</h1>
      <div className={ drawNumber === 2 ? "hand doneDraw" : "hand" }>
        <Hand ref={mainHand} />
      </div>
      <DrawButton />
    </div>
  );
}

export default App;
