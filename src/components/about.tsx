import React, { useContext } from 'react'
import { counterContext } from '../context/Store'

export default function About() {
    let data :Object | any= useContext(counterContext)

  return (
    <>
    about
    {data.count}
    </>
  )
}
