import "./userblogs.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


const UserBlogs = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    {
      axios.get("https://blogs-mboi.onrender.com/api/blogs",
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(async function (response) {
          setState(response.data.reverse());
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);


  return (
    <>
      <div className="propertycontainer">
        {/* {console.log((state))} */}
        {state.map(post => {
          return <div>
            {post.title}<br/>
            {post.createdAt}
            {post.description}<br/>
            {post.author}<br/>
            
          </div>
        })}
      </div>
    </>
  );
};
export default UserBlogs;


