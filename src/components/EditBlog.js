import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { editBlog } from '../redux/action/action.js';
import { useDispatch, connect } from 'react-redux';
import {useState,useEffect} from 'react';

function EditBlog(props) {

    //const {id} = useParams();
    const dispatch = useDispatch();

    const [tempVal,setTempVal] = useState(null);
    let myparamval = window?.location?.href.split("/")[4];

    useEffect(() => {   
        if(props.user.items?.length > 0)
        {
            let temp = props?.user?.items?.filter(comp => {
                if(comp.id == myparamval)
                {
                    return comp;
                }
            });
            setTempVal(temp[0]);
        }
    },[]);

    function setTitleValue(val){
        tempVal.title = val;
    }

    function setCategoryValue(val){
        tempVal.category = val;
    }

    function setContentValue(val){
        tempVal.content = val;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let newBlog = {
            id : 0,title : '',category:'',content:'',isLiked:false
        }
        newBlog.id = tempVal.id;
        newBlog.title = tempVal.title;
        newBlog.category = tempVal.category;
        newBlog.content = tempVal.content; 
        dispatch(editBlog(newBlog));
        window.location.href = "/"; 
    };

    return (<>
        
        <div className="container blog-container shadow mt-5">
            <h4 className='mb-3 mx-3'>Edit Blog</h4>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div className="mb-3 mx-3">
                    <label className="form-label">Title&nbsp;:</label>
                    <input onChange = {(e) => setTitleValue(e.target.value)} defaultValue = {tempVal?.title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 mx-3">
                    <label className="form-label">Category&nbsp;:</label>
                    <input onChange = {(e) => setCategoryValue(e.target.value)} defaultValue = {tempVal?.category} type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 mx-3">
                    <label className="form-label">Blog Content&nbsp;:</label>
                    <textarea onChange = {(e) => setContentValue(e.target.value)} defaultValue = {tempVal?.content} style={{ height: "150px", overflow:"scroll", resize:"none" }} type="text" className="form-control" id="textArea" />
                </div>
                <button type="submit" className="btn btn-primary mx-3">Update</button>
                <Link to="/" className="btn btn-primary mx-3">Cancel</Link>
            </form>
            
        </div>
    </>)
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  };
  export default connect(mapStateToProps)(EditBlog)
