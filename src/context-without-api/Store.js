import { createContext, useState } from "react";
/*
context ==> 
shared data ال 
*/
export let counterContext = createContext(0)

/* 
  {props.children} ==> 
 دة component اللى جو ال components بتبقى شايلة ال 
*/

export default function CounterContextProvider(props){
    let [count,SetCount]=useState(0)

    function increment() {
        SetCount(count + 1)
    }

    function decrement() {
        SetCount(count - 1)
    }

    // بتوعها children دة لل count معناها ابعت ال 
    return <counterContext.Provider 
              value={{count , price , increment , decrement}}>
              {props.children}  
          </counterContext.Provider>
}