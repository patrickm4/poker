import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../App.css"

// dispaly possible hands on next draw not dependant on held but the overall hand

const Hand = forwardRef((props, ref) => {
  // 0's would mean face down, game has not started
  const [hand, setHand] = useState([0, 0, 0, 0, 0]);
  const [held, updateHeld] = useState([]);
  // need to display different ui depending on number
  const [displayHand, setDisplayHand] = useState([0,0,0,0,0])

  const generate = (diffArr) => {
    // add face cards and ace
    const newHand = diffArr.map(f=>{
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
    // setDisplayHand(newHand)

    // add suit
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
    // setDisplayHand(changeSuit)

    // add color
    const changeColor = changeSuit.map(c=>{
      if(c.color === 0){
        return {value: c.value, suit: c.suit, color: 'black'}
      } else if(c.color === 1){
        return {value: c.value, suit: c.suit, color: 'red'}
      } else {
        return
      }
    })
    
    setDisplayHand(changeColor)
  }

  useImperativeHandle(ref, () => ({
    doDraw() {
      if(held.length > 0){
        const newHand = hand.map((e, i)=>{
          // held.forEach(y=>{
          //   if(y)
          // })
          if(held.indexOf(i) !== -1){
            return {value: e.value, suit:e.suit, color: e.color}
          } else {
            let card = {
              value: Math.round(Math.random() * 12 + 1),
              suit: Math.round(Math.random() * 3 + 1),
              color: Math.round(Math.random() * 1)
            }
            return card
          }
        })
        console.log("held", held, newHand)
        generate(newHand)
      } else {
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
        generate(diffHand)
      }

    }

  }));

  // TODO add holding cards
  // might need to build the randomizer for value, suit and color
  // find the value by index
  // change only other indexs
  const hold = (h, i) =>{
    let newArr = [...held]
    newArr.push(i)
    updateHeld(newArr)
    console.log("yeetwe", h, i, newArr)
  }

  // return (
  //   <div className="hand">
  //     <div className="card" style={{'color': !displayHand[0].color ? 'black' : displayHand[0].color }}>
  //       {!displayHand[0].value ? '0' : displayHand[0].value}
  //       <p>{!displayHand[0].suit ? '0' : displayHand[0].suit}</p>
  //     </div>
  //     <div className="card" style={{'color': !displayHand[1].color ? 'black' : displayHand[1].color }}>
  //       {!displayHand[1].value ? '0' : displayHand[1].value}
  //       <p>{!displayHand[1].suit ? '0' : displayHand[1].suit}</p>
  //     </div>
  //     <div className="card" style={{'color': !displayHand[2].color ? 'black' : displayHand[2].color }}>
  //       {!displayHand[2].value ? '0' : displayHand[2].value}
  //       <p>{!displayHand[2].suit ? '0' : displayHand[2].suit}</p>
  //     </div>
  //     <div className="card" style={{'color': !displayHand[3].color ? 'black' : displayHand[3].color }}>
  //       {!displayHand[3].value ? '0' : displayHand[3].value}
  //       <p>{!displayHand[3].suit ? '0' : displayHand[3].suit}</p>
  //     </div>
  //     <div className="card" style={{'color': !displayHand[4].color ? 'black' : displayHand[4].color }}>
  //       {!displayHand[4].value ? '0' : displayHand[4].value}
  //       <p>{!displayHand[4].suit ? '0' : displayHand[4].suit}</p>
  //     </div>
  //   </div>
  // );

  return displayHand.map((h, i)=>(
    <div
      className="card"
      style={{'color': h.color}}
      onClick={()=>{hold(h, i)}}
      key={i}
      >
      {!h.value ? '0' : h.value }
      <p>{h.suit}</p>
    </div>
  ))

});

// const checkHand = () =>{
//   console.log()
// }

export default Hand;
