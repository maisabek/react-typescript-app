import  Axios  from "axios"
import { createFactory, useEffect, useState } from "react"
import { connect } from "react-redux"
import { AddPosts } from "../actions/PostActions"

function Add(props) {
   let [posts,setPosts]=useState({
    title:'',
    body:''
   })
   function getPostData(e){
     let NewPosts={...posts}
     NewPosts[e.target.name]=e.target.value
     setPosts(NewPosts)
   }
   async function submitPost(e){
    e.preventDefault()
    props.AddPosts(posts)
   }
   useEffect(()=>{
    if(props.posts){
      props.posts.unshift(props.post)
    }
  },[props.posts])
    return (
        <>
              <h3 className='my-3'>Redux With Api</h3>
            <h5 className="text-primary">Add Post</h5>
            <form onSubmit={submitPost}>
                <div className="mt-3">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" name="title" 
                    onChange={getPostData}/>
                </div>

                <div className="mt-3">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" name="body" id="body" 
                    onChange={getPostData}></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3">submit</button>
            </form>
        </>
    )
}


export default connect(null,{AddPosts})(Add)


//sfc