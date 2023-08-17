import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from './CreateSlice'
/*
redux 
state mangement مكتبة معمولة عشان ال 
______________________________________________
redux toolkit
 واللى عاملها تيم الريأكت redux انهم يستخدموا ال developer مكتبة عشان تساعد ال 
_____________________________________________

npm install @reduxjs/toolkit
npm install react-redux  ==> redux عشان لو هستخدم الريأكت مع ال 
_________________________

store ==> دا بيقى فية الداتا
Reducers ==>  
وتغير فية والفنكشن دى بتاخد store دا فنكشن الوحيدة اللى بتقدر تدخل جو ال 
new state وبترجع previous state , action
*/

export default function Defination() {
  //counter ==> store فى ال reducer  اسم ال 
  let count= useSelector((state:any)=>state.counter.value)
  let dispatch=useDispatch()
  return (
    <div>
      Redux count = {count}
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}
