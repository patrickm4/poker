import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../App.css"

const Hand = forwardRef((props, ref) => {
  // 0's would mean face down, game has not started
  const [hand, setHand] = useState([0, 0, 0, 0, 0]);
  const [held, updateHeld] = useState("hello");
  // need to display different ui depending on number
  const [displayHand, setDisplayHand] = useState([0,0,0,0,0])

  useImperativeHandle(ref, () => ({
    doDraw() {
      const diffHand = hand.map(e=>{
        //TODO add black and red color
        // let card = Math.round(Math.random() * 12 + 1);
        let card = {
          value: Math.round(Math.random() * 12 + 1),
          suit: Math.round(Math.random() * 3 + 1),
          color: Math.round(Math.random() * 1)
        }
        return e = card
      })
      setHand(diffHand)

      // add face cards and ace
      const newHand = diffHand.map(f=>{
        if(f.value === 11){
          // return f.value = 'J'
          let oneCard = {value:'J',suit:f.suit, color: f.color}
          return oneCard
        } else if(f.value === 12){
          // return f.value = 'Q'
          let oneCard = {value:'Q',suit:f.suit, color: f.color}
          return oneCard
        } else if(f.value === 13){
          // return f.value = 'K'
          let oneCard = {value:'K',suit:f.suit, color: f.color}
          return oneCard
        } else if(f.value === 1){
          // return f.value = 'A'
          let oneCard = {value:'A',suit:f.suit, color: f.color}
          return oneCard
        } else {
          return {value: f.value, suit:f.suit, color: f.color}
        }
      })
      setDisplayHand(newHand)

      // TODO add suit
      const changeSuit = newHand.map(s=>{
        if(s.suit === 1){
          return {value: s.value, suit:'Heart', color: s.color}
        } else if(s.suit === 2){
          return {value: s.value, suit:'Spade', color: s.color}
        } else if(s.suit === 3){
          return {value: s.value, suit:'Club', color: s.color}
        } else if(s.suit === 4){
          return {value: s.value, suit:'Diamond', color: s.color}
        } else {
          //should never happen
          return {value: s.value, suit:s.suit, color: s.color}
        }
      })
      setDisplayHand(changeSuit)

      // TODO add color
    }
    // TODO add holding cards
  }));

  return (
    <div className="hand">
      <div className="card">
        {!displayHand[0].value ? '0' : displayHand[0].value}
        <p>{!displayHand[0].suit ? '0' : displayHand[0].suit}</p>
      </div>
      <div className="card">
        {!displayHand[1].value ? '0' : displayHand[1].value}
        <p>{!displayHand[1].suit ? '0' : displayHand[1].suit}</p>
      </div>
      <div className="card">
        {!displayHand[2].value ? '0' : displayHand[2].value}
        <p>{!displayHand[2].suit ? '0' : displayHand[2].suit}</p>
      </div>
      <div className="card">
        {!displayHand[3].value ? '0' : displayHand[3].value}
        <p>{!displayHand[3].suit ? '0' : displayHand[3].suit}</p>
      </div>
      <div className="card">
        {!displayHand[4].value ? '0' : displayHand[4].value}
        <p>{!displayHand[4].suit ? '0' : displayHand[4].suit}</p>
      </div>
    </div>
  );
});

// const checkHand = () =>{
//   console.log()
// }

export default Hand;
