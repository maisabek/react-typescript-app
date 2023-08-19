import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CreateSlice'
/*
redux 
state mangement مكتبة معمولة عشان ال 
______________________________________________
redux toolkit
 واللى عاملها تيم الريأكت redux انهم يستخدموا ال developer مكتبة عشان تساعد ال 
_____________________________________________

npm install @reduxjs/toolkit
npm install react-redux  ==>
reduxبال react بتربط ال  redux عشان لو هستخدم الريأكت مع ال 
_________________________

store ==> دا بيقى فية الداتا
Reducers ==>  
وتغير فية والفنكشن دى بتاخد store دا فنكشن الوحيدة اللى بتقدر تدخل جو ال 
new state وبترجع previous state , action
state يعنى الوحيد اللى يقدر يغير فى ال 


_______________________
redux-thunk ==> api عشان ال middleware 
asyncronus لل Call يعنى بتخلينى اعمل 
npm i redux-thunk
*/

export default function Defination() {
  //counter ==> store فى ال reducer  اسم ال 
  let count = useSelector((state: any) => state.counter.value)
  let dispatch = useDispatch()
  return (
    <div>
      <h3 className='my-3'>Redux Without Api</h3>
      <p>Redux count = {count}</p>
      <button onClick={() => dispatch(increment())} className='btn btn-info mt-3'>increment</button>
      <button onClick={() => dispatch(decrement())} className='btn btn-warning mx-2 mt-3'>decrement</button>
    </div>
  )
}
