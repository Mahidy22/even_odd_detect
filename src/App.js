import React, { useState } from 'react'
import EvenOdd from './EvenOdd';
import style from './EvenOdd.module.css';


export default function App() {

  const numbers = [10,21,34,29];
  const [pickedValue,setPickedValue] = useState(null);



  const displayNumber = numbers.map((num,i)=>{
    return (
      <div key={i} className={style.numStyle} onClick={()=>setPickedValue(num)}>{num}</div>
    )
  })


  return (
<div className={style.container}>
      <EvenOdd pickedValue={pickedValue} />
      <div>{displayNumber}</div>
    </div>
  )
}
