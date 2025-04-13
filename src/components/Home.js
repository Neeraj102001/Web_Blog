import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector,connect } from 'react-redux';
import { Link } from 'react-router-dom';
import blogapp1Img from '../images/blogapp1.jpg';
import Image from '../images/blog1.png';
function Home(props) {
    console.log(props);
    const blogList = useSelector(state=>state);

    const [blogArray, setBlogArray]= useState([]);

    useEffect(() => {   
        if(props?.user?.items?.length > 0)
        {
            setBlogArray(props.user.items);
        }
    },[]);
    const generateTable = () => {
        console.log("BlogDetails",blogArray);
        let array = [];
        blogArray.map((user,index) => {
            array.push(<tr key={index}>
                <td><Link to={`showBlog/${user.id}`} ><button className="blog-list-btn">{user.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="blog-category">{user.category}</span></button></Link></td>
            </tr>)
        });
        return array;
    };


    return (<>

        <div className="container blog-container shadow mt-5">
        <div style={{ backgroundImage:`url(${Image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:450,width:800,
    }}>
            <h1><img width="45px" src={blogapp1Img} /> Posted Blogs</h1>
            <table style={{ width: "300px" }}>
                <tbody>
                {generateTable()}
                </tbody>
            </table>
        </div>
        </div>
    </>)
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Home);
