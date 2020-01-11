import React, { useState, useEffect } from "react";
import "../App.css"

const Legend = (props) =>{
  const [result, setResult] = useState('')
  // write winning hands
  // code where we can include wild card or not

  // Royal flush
  // straight flush
  // 4 of a kind
  // Full house
  // Flush
  // Straight

  // Other kinds
  // Royal flush w/o Deuce
  // 5 of a kind
  // Three of a kind
  // Two Pair
  // Jacks or better

  const checkNumber = (hand) =>{
    // 11=J, 12=Q, 13=K, 1=A
    // console.log("yeeeeeet", hand)
    if(hand.length > 0){

      // for(let [k, v] of hand.value[0]){
      //     console.log("p", k, v)
      // }
      let newArr = hand.map(e => {
        return e.value
      })
      console.log("yeeeet", newArr)
      // newArr.filter(n => {
      //   return
      // })
      // newArr.forEach(e => {
      //   if(newArr)
      // })
    }
  }
  const checkSuit = (hand) =>{
    // 1= Heart, 2=Spade, 3=Club, 4=Diamond
    // console.log("hand", hand)
    let newArr = hand.map(e => {
      return e.suit
    })
    // flush
  }
  const checkColor = (hand) =>{
    // 0=black, 1=red
  }

  useEffect(()=>{
    console.log("wooop")
    //compare the hadns here and show result
    const hand = props.hand
    checkNumber(hand)
    checkSuit(hand)
    checkColor(hand)
    setResult('win or lose')
  }, [])

  return <div>{result}</div>
}

export default Legend;
