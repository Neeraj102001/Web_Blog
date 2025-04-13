import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { deleteBlog,likeBlog } from '../redux/action/action';
import { Link } from 'react-router-dom';
import Img from '../images/favourite.png';
import Image from '../images/blog1.png';
function ShowBlog(props) {

  const [tempVal, setTempVal] = useState(null);
  console.log("ShowBlogProps", props);

  const dispatch = useDispatch();
  //const nav = useNavigate();

  let myparamval = window?.location?.href.split("/")[4];

  useEffect(() => {
    if (props.user.items?.length > 0) {
      let temp = props?.user?.items?.filter(blog => {
        if (blog.id === myparamval) {
          return blog;
        }
      });
      setTempVal(temp[0]);
    }
  }, []);



  const onDeleteHandler = (e) => {
    e.preventDefault();
    var res = window.confirm("Confirm to delete?");
    if(res){
      dispatch(deleteBlog(tempVal.id))
      window.location.href = "/";
    }
  };

  const onClickLike = (e) => {
    e.preventDefault();
    let newBlog = {
        id : 0,title : '',category:'',content:'',isLiked:false
    }
    newBlog.id = tempVal.id;
    newBlog.title = tempVal.title;
    newBlog.category = tempVal.category;
    newBlog.content = tempVal.content;
    newBlog.isLiked = !tempVal.isLiked;
    console.log("Before Dispatch",newBlog);
    dispatch(likeBlog(newBlog));
};


  return (<>

    <div className="container app-nav shadow mt-5">
      <span>
        <a href="/" >BACK</a>
        <button className="btn btn-primary like-btn" onClick={onClickLike}>{tempVal?.isLiked ? <>Liked !!! <img width="25px" src={Img} /></> : "Like"}</button>
        <Link to={`../../edit/${tempVal?.id}`}><button className="btn btn-info" >Edit</button></Link>
        <button className="btn btn-danger" onClick={onDeleteHandler}>Delete</button>
      </span>
    </div>
    <div className="container blog-container shadow">
    <div style={{ backgroundImage:`url(${Image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
    height:450,width:800,
    }}>
      <span><h2 style={{ color: "blue" }}>{tempVal?.title}</h2><b>Category : {tempVal?.category}</b></span><br /><br /><br />
      <p>
        {tempVal?.content}
      </p>
    </div>
    </div>
      
  </>)
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};
export default connect(mapStateToProps)(ShowBlog)
