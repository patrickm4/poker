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
      let card = Math.round(Math.random() * 15);
      console.log("yeet", card, hand, typeof hand);
      setHand(hand = []);
      console.log("yaaw", hand, typeof hand);
    },
    setHand() {
      hand = []
      console.log("yaas", hand, typeof hand);
    }
  }));

  return (
    <div>
      {hand}
      <button
        onClick={() => {
          console.log(hand);
        }}
      >
        Check hand array
      </button>
    </div>
  );
});

// const checkHand = () =>{
//   console.log()
// }

export default Hand;
