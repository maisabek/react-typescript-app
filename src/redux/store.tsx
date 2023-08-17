import { configureStore } from "@reduxjs/toolkit";
import { CounterReducers } from "./CreateSlice";

export const counterStore = configureStore({
     // store اللى يقدر يعدل فى ال reducer ان دا ال 
    // counter ==> slice الأسم اللى موجود فى ال 
    reducer: {counter:CounterReducers}, 
})