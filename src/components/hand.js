import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../App.css"

const Hand = forwardRef((props, ref) => {
  // 0's would mean face down, game has not started
  const [hand, setHand] = useState([0, 0, 0, 0, 0]);
  const [held, updateHeld] = useState("hello");
  // need to display different ui depending on number
  const [displayHand, setDisplayHand] = useState([0,0,0,0,0])

  const handleDraw = () => {
    // console.log("yeet");
  };

  useImperativeHandle(ref, () => ({
    doDraw() {
      const diffHand = hand.map(e=>{
        let card = Math.round(Math.random() * 13 + 1);
        return e = card
      })
      console.log("yaaw", diffHand)
      setHand(diffHand)
    }
  }));

  return (
    <div>
      <span className="card">{hand[0] === 11 ? 'J' : hand[0] }</span>
      <span className="card">{hand[1]}</span>
      <span className="card">{hand[2]}</span>
      <span className="card">{hand[3]}</span>
      <span className="card">{hand[4]}</span>
    </div>
  );
});

// const checkHand = () =>{
//   console.log()
// }

export default Hand;
