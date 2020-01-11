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
    //clubs and spade can only be black and hearts and diamonds red

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
    // props.winOrLose(displayHand)
  }

  const newDraw = () =>{
    const diffHand = hand.map(e=>{
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

  // methods to call from parent
  useImperativeHandle(ref, () => ({
    doDraw(e) {
      if(held.length > 0){
        const newHand = hand.map((e, i)=>{
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
        setHand(newHand)
        generate(newHand)
      } else {
        newDraw()
      }
    },

    reDraw() {
      updateHeld([])
      newDraw()
    },

    sendHand() {
      console.log("hand", hand)
      props.winOrLose(hand)
    }

  }));

  const hold = (h, i) =>{
    // if user clicks a card already held, need to remove from array
    if(held.includes(i)){
      let heldArr = held.filter(n => n !== i)
      updateHeld(heldArr)
    } else {
      let newArr = [...held]
      newArr.push(i)
      updateHeld(newArr)
    }
  }

  return displayHand.map((h, i)=>(
    <div
      className="card"
      className={held.includes(i) ? "selected card" : 'card'}
      style={{'color': h.color}}
      onClick={()=>{hold(h, i)}}
      key={i}
      >
      {!h.value ? '0' : h.value }
      <p>{h.suit}</p>
    </div>
  ))

});

export default Hand;
