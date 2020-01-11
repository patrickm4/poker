import React from "react";

const Card = () => {

  const CardTop = () => {
    return <div
        className="card-top"
      >
      A
      </div>
  }

  return <div
      className="cardBeta"
    >
      <CardTop />
      <div>
        Spade
      </div>
      <div
        className="card-bottom"
        >
        A
      </div>
    </div>
}

export default Card
