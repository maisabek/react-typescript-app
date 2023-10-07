import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CreateSlice'

export default function Counter() {
  // counter ==> store فى ال reducer  اسم ال 
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
