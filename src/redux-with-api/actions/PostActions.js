import Axios from 'axios'
import Types from '../reducers/types'

export function fetchPosts() {
  // action creator
  return async function (dispatch) {
    let { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts`)
    dispatch({ type: Types.FETCH_POSTS, payload: data })
  }
}



export function AddPosts(posts) {
  return async function (dispatch) {
    let { data } = await Axios.post(`https://jsonplaceholder.typicode.com/posts`, JSON.stringify(posts), {
      headers: {
        "Content-Type": "application/json"
      }
    })
    dispatch({type:Types.ADD_POST,payload:data})
  }
}


export function DeletePost(id){
  return async function (dispatch){
    let {data} = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     console.log(data);
    dispatch({type:Types.DELETE_POST,payload:data})
  }
}


export function EditPost(post){
  return async function(dispatch){
    let {data} = await Axios.post(`https://jsonplaceholder.typicode.com/posts`, JSON.stringify(post), {
      headers: {
        "Content-Type": "application/json"
      }
    })
    dispatch({type:Types.EDIT_POST,payload:data})
  }
}


  export function GetPostById(id){
    return async function(dispatch){
      let {data} = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      dispatch({type:Types.PostById,payload:data})
    }
  }