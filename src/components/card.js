import React from "react";

const Card = () => {

  const Corner = () => {
    return <div
        className="corner"
      >
      A
      </div>
  }

  return <div
      className="cardBeta"
    >
      <Corner
        style={{ textAlign: 'left' }}
      />
      <div>
        Spade
      </div>
      <Corner
        style={{ textAlign: 'right' }}
      />
    </div>
}

export default Card
