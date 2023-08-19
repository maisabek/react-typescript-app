import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        // state ==> Initial State شايلة ال 
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})


// counterSlice.actions ==> reducers يترجع اللى جو ال 
export let {increment,decrement}=counterSlice.actions 

export let CounterReducers= counterSlice.reducer