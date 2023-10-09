import  Axios  from 'axios'
import { createContext, useEffect, useState } from 'react'


export let movieContext=createContext()

export default function ApiContextProvider(props) {
   let [trendingMovie,setTrendingMovie]=useState([])

  async function getTrendingMovie(){
    let {data}=await Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=a631b24dc97d4274715c5fa6b5a60321&page=1`)
    setTrendingMovie(data.results)
   }


  return (
    <movieContext.Provider 
      value={{trendingMovie,getTrendingMovie}}>
      {props.children}
    </movieContext.Provider>
  )
}
