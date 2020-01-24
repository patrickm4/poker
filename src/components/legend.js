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

  const compareNum = (a, b) =>{
    return a - b
  }

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
      newArr.sort(compareNum)
      console.log("cn", newArr)

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
        if(p.bucket === 3){
          setResult('Three of a kind!')
        }
      })

      //three of a kind
      buckets.forEach(p =>{
        if(p.bucket === 3){
          setResult('Three of a kind!')
        }
      })

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
      //five of a kind
      buckets.forEach(p =>{
        if(p.bucket === 5){
          setResult('Five of a kind!')
        }
      })

      // let endHand = {}
      // newArr.forEach((num, i)=>{
      //   var tempStr = num
      //   endHand.tempStr = num
      // })
      // console.log("endHand", endHand)

      // let same = 0
      // for(var i=0; i < newArr.length; i++){
      //   console.log(newArr[i])
      //   if(newArr[i] === newArr[i+1]){
      //     same ++
      //     console.log("yeet", newArr[i])
      //   }
      // }
      // if(same === 1){
      //   console.log("two of a kind")
      // } else if (same === 2){
      //   console.log("three of a kind")
      // }
      // doesnt work if there are two sets of two of a kind, console logs 'three of a kind'

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
    const newArr = hand.map(e => {
      return e.suit
    })
    // flush
    const isFlushOrNaw = newArr.every(s =>{
      return s === newArr[0]
    })

    if(isFlushOrNaw){
      setResult('Flush1')
    }
  }

  useEffect(()=>{
    // console.log("wooop")
    //compare the hadns here and show result
    const hand = props.hand
    checkNumber(hand)
    checkSuit(hand)
    // checkColor(hand)
    // if(result === ''){
    //   // console.log("res", result)
    //   // setResult('Lose')
    // }
  }, [])

  return <div>{result}</div>
}

export default Legend;
