import React, { useState, useRef } from "react";
import Hand from "./components/hand";
import "./App.css";

function App() {
  // build cards (number and suit)
  // build hands 5 or 3
  // build winning
  // let dNum = 0
  const [dNum, setDNum] = useState(0)
  const mainHand = useRef();
  const [mainBtn, setMainBtn] = useState('Draw')

  // TODO add function so user can only draw twice before needed to reset

  const handleDraw = () =>{
    if(dNum === 1){
      console.log("asd")
      setMainBtn('Reset')
    }
    if(dNum < 2){
      mainHand.current.doDraw()
      // dNum += 1
      setDNum(dNum + 1)
    } else {
      setMainBtn('Draw')
      mainHand.current.reDraw()
      setDNum(1)
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
      <h1>Poker</h1>
      <div className="hand">
        <Hand ref={mainHand} />
      </div>
      <DrawButton />
    </div>
  );
}

export default App;
