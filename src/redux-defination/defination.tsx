import store from "../redux-with-api/store"

/*
redux 
state mangement مكتبة معمولة عشان ال 
______________________________________________
redux toolkit
 واللى عاملها تيم الريأكت redux انهم يستخدموا ال developer مكتبة عشان تساعد ال 
_____________________________________________

npm install @reduxjs/toolkit

npm install react-redux  ==>
redux بال react بتربط ال  redux عشان لو هستخدم الريأكت مع ال 

It also includes the most popular Redux add-ons, such as Redux Thunk for asynchronous
logic, Reselect for building selector functions, and many others, making development
easier and saving developers time
_________________________

store ==> دا بيقى فية الداتا
In Redux, the "Store" holds all the states, reducers,
and actions that make up the app

______________________
Reducers ==>  
وتغير فية والفنكشن دى بتاخد store دا فنكشن الوحيدة اللى بتقدر تدخل جو ال 
new state وبترجع previous state , action
state يعنى الوحيد اللى يقدر يغير فى ال 

_______________________
redux-thunk ==> api عشان ال middleware 
asyncronus لل Call يعنى بتخلينى اعمل 
npm i redux-thunk
can delay an action's dispatch or perform conditional dispatch
middleware executes the function, which does not have to be pure.

________________________
dispatch() ==> middleware
tests the actions before they reach to store. 
Middleware can change the actions, create more actions

________________________

؟ flux وال redux الفرق بين ال 
الاتنين عباره عن state management systems 
بس في شويه اختلاف في طريقه اللي بتشتغل بيها بس،،
زي مثلا
redux ==>
single store بيكون فيها  
Open source js library, 
مش بيحصل mutate لل store مع ال state
flux  ==>
multiple stores ممكن يكون 
Is an architecture
بيحصلهم mutate

_______________

Describe Redux's basic principles ?
1- Source of truth
The global state of your application is stored in an object tree within a single store.
console.log("store = ",store.getState())

2- The state is read-only
The only way to change the state is to emit an action, an object describing what happened.
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

3- Pure functions are used to make changes
To specify how the state tree is transformed by actions, you write pure reducers.

____________________________
Is keeping all of the component's states in the Redux store necessary?
All component states do not need to be kept in the Redux store. 
We need to keep your application state as little as possible. 
Thus, we should only do it if it makes a difference to us or if it makes 
using Dev Tools easier.
___________________________
What are Redux's workflow features?
Reset: Resetting the Store's state is possible.
Revert: It is possible to revert or roll back to the previously committed state.
Sweep: All disabled actions that we mistakenly fired will be deleted.
Commit: The current state is set as the starting point.

_____________________________
12. What is the difference between state and props?
_________________________
Are there any things we should never do inside a reducer?

We should never do the following things inside a reducer:
Change the reducer's parameter.
We must ensure no side actions, such as routing transitions or API calls.
Non-pure functions, such as Date. now(), Math. random(), and so on should not be called.

_________________________
What is  Redux-Saga?
Redux Saga is a middleware framework that allows a Redux store to communicate with 
external resources asynchronously, such as making HTTP calls to external services, 
accessing browser storage, and performing Input/Output operations, among other things.
These procedures are also known as side effects.
*/
export default function Defination() {

  return <h5>Redux Defination

  </h5>
}
