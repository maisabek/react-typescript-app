import { combineReducers } from "redux";
import PostsReducers from './PostsReducer'
// root reducers ==> واحد reducer فى reducers بتجمع كل ال 
export let  RootReducers = combineReducers({
        posts:PostsReducers
})