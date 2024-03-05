import React, { useState } from "react";
import classes from "./navbar.module.css";
import profile from "../../Images/profile11.jpg";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showmodal, setShowmodal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  
  const navigate = useNavigate();
  const togglemodal = () => {
    setShowmodal(prev => !prev);
  };

  // handle Logout
  const handlelogout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={classes.left}>
          <Link to="/"><h3>socialhuB</h3></Link>
         </div>
        <div className={classes.right}>
          <form className={classes.searchform}>
            <input type="text" placeholder="search profile.." />
            <FaSearch className={classes.searchicon} />
          </form>
          <img
            src={profile}
            alt="img not found"
            className={classes.personimage}
            onClick={togglemodal}
          />
          {showmodal && (
            <div className={classes.modal}>
              <span onClick={handlelogout} className={classes.logout}>
                logout
              </span>
              {/* <Link to="/updateProfile/user?.id" className={classes.Updateprofile}>
               
                UpdateProfile
              </Link> */}
               <Link to={`/updateProfile/${user?._id}`} className={classes.Updateprofile}>
               
               UpdateProfile
             </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
