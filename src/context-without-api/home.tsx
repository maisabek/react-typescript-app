import React, { useContext } from 'react'
import { counterContext } from './Store'

export default function Home() {
  let data: Object | any = useContext(counterContext)

  return (
    <div>
      <div>
        <h3 className='my-3'>Context</h3>
        <p className='mx-2'>count : {data.count}</p>
      </div>
      <button className='btn btn-info mt-3' 
      onClick={() => data.increment()}>increment</button>
      
      <button className='btn btn-warning mx-2 mt-3' 
      onClick={() => data.decrement()}>decrement</button>

    </div>
  )
}
