import React, { useContext } from 'react'
import { counterContext } from '../context/Store'

export default function Home() {
     let data :Object | any= useContext(counterContext)
  
  return (
    <div>
        price : {data.price}
        count : {data.count}
        <button onClick={()=>data.increment()}>increment</button>
        <button onClick={()=>data.decrement()}>decrement</button>

    </div>
  )
}
