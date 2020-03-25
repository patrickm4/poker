import React, { useState, useRef } from "react";
import Hand from "./components/hand";
import Legend from "./components/legend"
import Card from "./components/card"
import BetBtns from "./components/bets"
import "./App.css";

function App() {
  // TODO should not be able to hold "0" cards
  // build cards (number and suit)
  // build hands 5 or 3
  // build winning
  // let drawNumber = 0
  const [drawNumber, setdrawNumber] = useState(0)
  const [credit, setCredit] = useState(100)
  const [bet, setBet] = useState(0)
  const mainHand = useRef();
  const [mainBtn, setMainBtn] = useState('Draw')
  const [finalHand, setFinalHand] = useState([])
  const [isDecided, setFinal] = useState('')

  // TODO add function so user can only draw twice before needed to reset

  const handleDraw = () =>{
    if(drawNumber === 1){
      setMainBtn('Re-draw')
      setCredit(0)
      setTimeout(()=>{mainHand.current.sendHand()}, 10)
    }
    if(drawNumber < 2){
      mainHand.current.doDraw(drawNumber)
      // drawNumber += 1
      setdrawNumber(drawNumber + 1)
    } else {
      setMainBtn('Draw')
      mainHand.current.reDraw()
      setdrawNumber(1)
    }

  }

  const DrawButton = () => {
    setFinal(false)
    return <button
              className="drawBtn"
              onClick={() => {handleDraw()}}>{mainBtn}
            </button>
  }

  const addCredit = (type) => {
    // make sure the legend is only called once
    // if(!isDecided){
    //   if(type === '2kind'){
    //     console.log("type", type)
    //   }
    //   setFin0al(true)
    // }
    if(!isDecided){
      console.log("type", type)
      setFinal(true)
    }
  }

  const betCredit = (b) => {
    // TODO get bets, reduce from credit


    // dont take more than they have
    if(b > credit){
      console.log("No more monies")
    } else {
      setBet(bet + b)
      setCredit(credit - b)
      console.log("yeeet", b, credit, bet)
    }
  }

  const ResultLog = () =>{
    if(drawNumber === 2){
      return <Legend isAlreadyDecided={isDecided} hand={finalHand} determine={t => addCredit(t)} />
      // return <Legend hand={finalHand} setBet={c => setCredit(credit + c)} />
    } else {
      return null
    }
  }

  const Credit = () => {
    return <div className="creditNum">{credit}</div>
  }

  return (
    <div className="App">
      <h1>Poker Deuces Wild</h1>
      <div className={ drawNumber === 2 ? "hand doneDraw" : "hand" }>
        <Hand
          ref={mainHand}
          winOrLose={p => setFinalHand(p)}
          numberDraw={drawNumber}
           />
      </div>
      <DrawButton />
      <ResultLog />
      <div
        className="bottom-bar"
        >
        <BetBtns addBet={c => betCredit(c)}/>
        <div className="bet-number">{bet}</div>
        <Credit />
      </div>
    </div>
  );
}

export default App;
