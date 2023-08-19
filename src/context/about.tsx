import React, { useContext } from 'react'
import { counterContext } from './Store'

export default function About() {
    let data :Object | any= useContext(counterContext)

  return (
    <>
    <h3 className='my-3'>Context</h3>
    <p> about {data.count}</p> 
    </>
  )
}
