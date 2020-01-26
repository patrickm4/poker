import React, { useState, useEffect } from "react";
import "../App.css"

const Legend = (props) =>{
  const [result, setResult] = useState('')
  // TODO code where we can include wild card or not

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

  const compareNum = (a, b) =>{
    return a - b
  }

  const checkNumber = (hand) =>{
    if(hand.length > 0){
      let newArr = hand.map(e => {
        return e.value
      })
      newArr.sort(compareNum)

      // 11=J, 12=Q, 13=K, 1=A
      let buckets = [
        {
          bucketName: 1,
          bucket: 0
        },
        {
          bucketName: 2,
          bucket: 0
        },
        {
          bucketName: 3,
          bucket: 0
        },
        {
          bucketName: 4,
          bucket: 0
        },
        {
          bucketName: 5,
          bucket: 0
        },
        {
          bucketName: 6,
          bucket: 0
        },
        {
          bucketName: 7,
          bucket: 0
        },
        {
          bucketName: 8,
          bucket: 0
        },
        {
          bucketName: 9,
          bucket: 0
        },
        {
          bucketName: 10,
          bucket: 0
        },
        {
          bucketName: 11,
          bucket: 0
        },
        {
          bucketName: 12,
          bucket: 0
        },
        {
          bucketName: 13,
          bucket: 0
        }
      ]

      //fill up the buckets
      newArr.forEach(n=>{
        buckets.forEach(b=>{
          if(n === b.bucketName){
            b.bucket++
          }
        })
      })

      //two of a kind
      buckets.forEach(p =>{
        if(p.bucket === 2){
          setResult('Two of a kind!')
        }
      })

      //three of a kind
      buckets.forEach(p =>{
        if(p.bucket === 3){
          setResult('Three of a kind!')
        }
      })

      //straight
      let bucketCount = 0
      buckets.forEach(n=>{
        if(bucketCount !== 5){
          n.bucket > 0 ? bucketCount++ : bucketCount = 0
        }
      })
      let royal = false
      //need check for 10 to ace
      if(buckets[9].bucket > 0 && buckets[10].bucket > 0 && buckets[11].bucket > 0, buckets[12].bucket > 0 && buckets[0].bucket > 0){
        royal = true
        bucketCount = 5

      }
      if(bucketCount === 5){
        setResult('Straight!')
      }

      //flush
      let isFlush = checkSuit(hand)
      if(isFlush){
        //return early in case of straight flush
        return setResult('Flush!')
      } else if(bucketCount === 5){
        setResult('Straight!')
      }

      //fullhouse
      let filterArr = buckets.filter(d => {
        return d.bucket === 2 || d.bucket === 3
      })
      if(filterArr.length === 2){
        let filterMore = filterArr.filter(f=>{
          return f.bucket === 2
        })
        let filterMore2 = filterArr.filter(f=>{
          return f.bucket === 3
        })
        if(filterMore.length === 1 && filterMore2.length === 1){
          setResult('Fullhouse')
        }
      }

      //four of a kind
      buckets.forEach(p =>{
        if(p.bucket === 4){
          setResult('Four of a kind!')
        }
      })

      if(isFlush === 'flush' && bucketCount === 5){
        setResult('Straight Flush!')
      }

      //TODO if playing wild card, royal flush w/ wild is lower

      //five of a kind
      buckets.forEach(p =>{
        if(p.bucket === 5){
          setResult('Five of a kind!')
        }
      })

      //royal flush
      if(royal && isFlush){
        setResult('Royal Flush!')
      }
    }
  }
  const checkSuit = (hand) =>{
    // 1= Heart, 2=Spade, 3=Club, 4=Diamond
    const newArr = hand.map(e => {
      return e.suit
    })
    // flush
    const isFlushOrNaw = newArr.every(s =>{
      return s === newArr[0]
    })

    if(isFlushOrNaw){
      return true
    } else {
      return false
    }
  }

  useEffect(()=>{
    // console.log("wooop")
    //compare the hadns here and show result
    const hand = props.hand
    checkNumber(hand)
    // checkColor(hand)
    // if(result === ''){
    //   // console.log("res", result)
    //   // setResult('Lose')
    // }
  }, [])

  return <div
      className="results"
    >{result}</div>
}

export default Legend;
