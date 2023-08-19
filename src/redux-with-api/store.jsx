import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {RootReducers} from './reducers'
import { configureStore } from "@reduxjs/toolkit";

/*
createStore ==> 
reducers بتاخد اول حاجة ال 
initial value وبعدان ال 
middle ware وبعدان ال 
*/
const middlewares=[thunk]
const InitialState={}
export default createStore(
    RootReducers,
    InitialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)