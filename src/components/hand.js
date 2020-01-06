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
        //TODO need to add suits to the numbers
        // let card = Math.round(Math.random() * 12 + 1);
        let card = {
          value: Math.round(Math.random() * 12 + 1),
          suit: Math.round(Math.random() * 3 + 1)
        }
        return e = card
      })
      setHand(diffHand)
      const newHand = diffHand.map(f=>{
        console.log("yeet", f, typeof f, f.value, f.suit)
        //face cards and ace
        if(f.value === 11){
          // return f.value = 'J'
          let oneCard = {value:'J',suit:f.suit}
          return oneCard
        } else if(f.value === 12){
          // return f.value = 'Q'
          let oneCard = {value:'Q',suit:f.suit}
          return oneCard
        } else if(f.value === 13){
          // return f.value = 'K'
          let oneCard = {value:'K',suit:f.suit}
          return oneCard
        } else if(f.value === 1){
          // return f.value = 'A'
          let oneCard = {value:'A',suit:f.suit}
          return oneCard
        } else {
          return {value: f.value, suit:f.suit}
        }
      })
      console.log("yaaw", newHand)
      setDisplayHand(newHand)
      //TODO update displayHand UI with new hand
    }
    // TODO add holding cards
  }));

  return (
    <div>
      <span className="card">{!displayHand[0].value ? '0' : displayHand[0].value}</span>
      <span className="card">{!displayHand[1].value ? '0' : displayHand[1].value}</span>
      <span className="card">{!displayHand[2].value ? '0' : displayHand[2].value}</span>
      <span className="card">{!displayHand[3].value ? '0' : displayHand[3].value}</span>
      <span className="card">{!displayHand[4].value ? '0' : displayHand[4].value}</span>
    </div>
  );
});

// const checkHand = () =>{
//   console.log()
// }

export default Hand;
