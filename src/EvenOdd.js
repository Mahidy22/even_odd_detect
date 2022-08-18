import React from 'react'
import style from './EvenOdd.module.css';


export default function EvenOdd({pickedValue}) {
  
    if(!pickedValue){
        return(<div style={{color:'crimson'}} className={style.header}>You Haven't Picked Any Number Yet</div>)
    }
    else if(pickedValue && pickedValue % 2 === 0){
        return(<div className={style.header}>
            <span style={{color:'springgreen'}}>{pickedValue}</span> is <span style={{color:'springgreen'}}>EVEN</span>
        </div>)
    }
    else{
        return(<div className={style.header}>
            <span style={{color:'crimson'}}>{pickedValue}</span> is <span style={{color:'crimson'}}>EVEN</span>
         </div>)

    }
}
