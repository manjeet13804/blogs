import "./dashboard.css";
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";

import Logout from "./logout";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Action = () => {
  const userId = localStorage.getItem("userId");
  const userName = userId.split("@")[0];
  const [states, setStates] = useState([]);

      axios.get("https://blogs-mboi.onrender.com/api/blogs",
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(async function (response) {
          setStates(response.data.reverse());
        })
        .catch(function (error) {
          console.log(error);
        });
    
 



  return (


    <>
      <div className="">
        <nav className="headercontainer">
          <div className="userid">USER ID:{userId} </div>
          <div className="header-menu">
            <Link to="/dashboard">
              <span className="menu">Home</span>
            </Link>
            <Link to="/create">
              <span className="menu">Create</span>
            </Link>
          </div>
          <div className="dropdown">
            <BiUser />
            {userName}

            <CgChevronDown />
            <div className="dropdown-content">
              <Logout></Logout>
            </div>
          </div>
        </nav>

      </div>
      <div className="propertycontainer">
        {/* {console.log((state))} */}
        {states.map(post => {
          return <div>
            {post.title}<br />
            {post.createdAt}
            {post.description}<br />
            {post.author}<br />

          </div>
        })}
      </div>
    </>

  )
}
export default Action;
