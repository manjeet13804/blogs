import "./dashboard.css";
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";

import Logout from "./logout";
import { Link } from "react-router-dom";
import UserBlogs from "./userblogs";
const Action = () => {
  const userId = localStorage.getItem("userId");
  const userName = userId.split("@")[0];



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
        <UserBlogs/>
      </div>

      <div className="headerbtmline"></div>
    </>

  )
}
export default Action;