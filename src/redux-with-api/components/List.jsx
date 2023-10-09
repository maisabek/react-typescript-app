import { useEffect, useState } from 'react'
import { DeletePost, fetchPosts } from '../actions/PostActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'
function Index(props) {
  let [posts, setPosts] = useState([])

  useEffect(() => {
    // call action
    props.fetchPosts()

  }, [])
  console.log("store = ",store.getState())

  return (
    <>
      <h3 className='my-3'>Redux With Api</h3>
      <h5>Posts</h5>
      {
        props.posts.map((data, index) =>
          <div key={index}>
            <h5>{data.title}</h5>
            <p>{data.body}</p>
            <button className='btn btn-danger'
              onClick={() => props.DeletePost(data.id)}>Delete</button>
            <Link className='btn btn-warning mx-3' to={`/edit/${data.id}`}>Edit</Link>
          </div>
        )
      }
    </>
  )
}

function mapStateToProps(state) {
  return {
    //posts ==> reducer اسم ال 
    posts: state.posts.items,
    post: state.posts.item,
  }
}
// connect ==> action لل connect component عشان اعمل 
export default connect(mapStateToProps, { fetchPosts, DeletePost })(Index)

