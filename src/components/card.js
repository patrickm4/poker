import React from "react";
import { ReactComponent as Clubs} from "../imgs/clubs.svg"
import { ReactComponent as Diamonds} from "../imgs/diamond.svg"
import { ReactComponent as Hearts} from "../imgs/heart.svg"
import { ReactComponent as Spades} from "../imgs/spade.svg"

const Card = props => {
  console.log("props card", props)

  const CardTop = () => {
    return <div
        className="card-top corner-num"
        style={{ 'color': props.color }}
      >
      {props.cardNum ? props.cardNum : 0 }
      <div
        style={{ width: '40px', marginTop: '-25px' }}
        >
        <Suit />
      </div>
      </div>
  }
  const CardBottom = () => {
    return <div
        className="card-bottom corner-num"
        style={{ 'color': props.color }}
      >
      <div
        style={{ height: '20px', width: '40px' }}
        >
        <Suit />
      </div>
      {props.cardNum ? props.cardNum : 0 }
      </div>
  }

  const Suit = () => {
    // return props.suit ? props.suit : 'OO'
    if(props.suit){
      if(props.suit === 'Diamond'){
        return <Diamonds />
      }
      if(props.suit === 'Heart'){
        return <Hearts />
      }
      if(props.suit === 'Spade'){
        return <Spades />
      }
      if(props.suit === 'Club'){
        return <Clubs />
      }
    } else {
      return ''
    }
  }

  return <div
      className={"cardBeta" + ( props.className === 'selected card' ? ' selected' : '')}
    >
      <CardTop />
      <div>
        <Suit />
      </div>

    </div>
}

export default Card
