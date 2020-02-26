import React, { useState } from "react"

const Bets = (props) => {

  return (
    <div>
      <button onClick={() => props.addBet(1)}>1</button>
      <button onClick={() => props.addBet(5)}>5</button>
      <button onClick={() => props.addBet(10)}>10</button>
    </div>
  )
}

export default Bets
