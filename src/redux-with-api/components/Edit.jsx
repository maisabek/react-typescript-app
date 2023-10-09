import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { EditPost, GetPostById } from "../actions/PostActions";
import { useFormik } from "formik";
import { useEffect } from "react";
import store from "../store";
const Edit = (props) => {
    const param=useParams()

    useEffect(()=>{
     props.GetPostById(param.id)
    },[])

    const formik=useFormik({
        initialValues:{
            title:props.post?.title,
            body:props.post?.body
        },
        enableReinitialize:true,
        onSubmit:(values)=>{
         props.EditPost(values)
        }
    })
    console.log("store = ",store.getState())
    return (
        <>
           <form onSubmit={formik.handleSubmit}>

            <input type="text" name="title" 
            value={formik.values.title}
            onChange={formik.handleChange}/>

            <input type="text" name="body"
            value={formik.values.body} 
            onChange={formik.handleChange}/>

            <button type="submit">submit</button>

           </form>
        </>
    );
}

function mapStateToProps(state){
    return {
        post:state.posts.item
    }
}
export default connect(mapStateToProps,{EditPost,GetPostById})(Edit);