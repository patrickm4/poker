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
    // console.log("hand", hand)
  }
  const checkSuit = () =>{
    // console.log("hand", hand)
  }
  const checkColor = () =>{
    // console.log("hand", hand)
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
