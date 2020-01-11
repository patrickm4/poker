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

  const checkNumber = () =>{
    // 11=J, 12=Q, 13=K, 1=A
  }
  const checkSuit = () =>{
    // 1= Heart, 2=Spade, 3=Club, 4=Diamond
    // console.log("hand", hand)
  }
  const checkColor = () =>{
    // 0=black, 1=red
  }

  useEffect(()=>{
    //compare the hadns here and show result
    const hand = props.hand
    console.log("yeeeeet", hand)
    setResult('win or lose')
  }, [])

  return <div>{result}</div>
}

export default Legend;
