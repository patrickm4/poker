import React, { useState, forwardRef, useImperativeHandle } from "react";

const Hand = forwardRef((props, ref) => {
  // 0's would mean face down, game has not started
  const [hand, setHand] = useState([0, 0, 0, 0, 0]);
  const [held, updateHeld] = useState("hello");

  const handleDraw = () => {
    // console.log("yeet");
  };

  useImperativeHandle(ref, () => ({
    doDraw() {
      // console.log("yeet", card, hand, typeof hand);
      // setHand([card,card,card,card,card]);
      // console.log("yaaw", hand, typeof JSON.stringify(hand));
      const diffHand = hand.map(e=>{
        let card = Math.round(Math.random() * 15);
        // setHand([card,card,card,card,card]);
        return e = card
      })
      console.log("yaaw", diffHand)
      setHand(diffHand)
    }
  }));

  return (
    <div>
      <span className="card">{hand[0]}</span>
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
