// import React from 'react'
// import classes from './profile.module.css'
// import coverPicture from '../../Images/natureimg.jpg'
// import profilePicture from '../../Images/profile11.jpg'
// import Share from '../share/Share'
// import { useSelector } from 'react-redux'
// import {useParams} from 'react-router-dom'
// import { useState } from 'react'
// import { useEffect } from 'react'

// import Post from '../post/Post'
// import axios from 'axios'

// const Profile = () => {
//     const { id } = useParams()
//     const { user:currentUser, token } = useSelector((state) => state.auth)
//     const [userPosts, setUserPosts] = useState([])
//     const [isFollowed, setIsFollowed] = useState(currentUser?.followings?.includes(id));
//     const [profileDetails, setProfileDetails] = useState({})
//     const BACKEND_URL = `http://localhost:3003/public/images/`

//     useEffect(() => {
//         const fetchPosts = async() => {
//             try {
//                 const response = await axios.get(`http://localhost:3003/post/find/userposts/${id}`)
//                 console.log(response.data)
//                 setUserPosts(response.data.data)
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//         fetchPosts()
//     }, [id])

//     useEffect(() => {
//         const fetchUserData = async() => {
//             try{
//             const user = await axios.get(`http://localhost:3003/user/find/${id}`)
//             setProfileDetails(user)
//         }catch(error){
//             console.log(error)
//         }
//     }
//         fetchUserData()
//     }, [id])

//     const handleFollow = async() => {
//         try {
//             const headers = {
//                 'Authorization': `Bearer ${token}`
//             }

//             if(isFollowed){
//                 await axios.put(`http://localhost:3003/user/unfollow/${id}`,  headers)
//             } else {
//                 await axios.put(`http://localhost:3003/user/follow/${id}`,  headers)
//             }

//             setIsFollowed(prev => !prev)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     console.log(profileDetails)
//   return (
//     <div className={classes.container}>
//         <div className={classes.wrapper}>
//             <div className={classes.top}>
//                 <img src={
//                     profileDetails?.coverPic
//                     ? BACKEND_URL + profileDetails?.coverPic
//                     : coverPicture
//                     } className={classes.coverPicture} alt=''/>
//                 <img src={
//                     profileDetails?.profilePic
//                     ? BACKEND_URL + profileDetails?.profilePic
//                     : profilePicture
//                     } className={classes.profilePicture} alt=''/>
//                 <div className={classes.profileData}>
//                    <h2 className={classes.username}>{profileDetails?.username}</h2>
//                    {currentUser?._id !== id && (
//                     <button className={classes.followBtn} onClick={handleFollow}>{isFollowed ? "Followed" : "Follow"} </button>

//                    )}
//                 </div>

//                 {id === currentUser?._id && <Share />}
//                 <div className={classes.posts}>
//                     {userPosts?.map((post) => (
//                         <Post key={post._id} post={post}/>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Profile

import React from "react";
import classes from "./profile.module.css";
import coverPicture from "../../Images/natureimg.jpg";
import profilePicture from "../../Images/profile11.jpg";
import Share from "../share/Share";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../post/Post";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const [userPosts, setUserPosts] = useState([]);
  const [isFollowed, setIsFollowed] = useState(user?.followings?.includes(id));
  const [profileDetails, setProfileDetails] = useState({});
  const BACKEND_URL = `http://localhost:3003/public/images/`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/post/find/userposts/${id}`
        );
        console.log(response.data);
        setUserPosts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [id]);

  // useEffect(() => {
  //     const fetchUserData = async() => {
  //         try{
  //         const user = await axios.get(`http://localhost:3003/user/find/${id}`)
  //         setProfileDetails(user)
  //     }catch(error){
  //         console.log(error)
  //     }
  // }
  //     fetchUserData()
  // }, [id])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/user/find/${id}`
        );
        setProfileDetails(response.data); // Update to setProfileDetails(response.data) instead of setProfileDetails(user)
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [id]);

  const handleFollow = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      if (isFollowed) {
        await axios.put(`http://localhost:3003/user/unfollow/${id}`, headers);
      } else {
        await axios.put(`http://localhost:3003/user/follow/${id}`, headers);
      }

      setIsFollowed(prev => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(profileDetails);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <img
            src={
              profileDetails?.coverPic
                ? BACKEND_URL + profileDetails?.coverPic
                : coverPicture
            }
            className={classes.coverPicture}
            alt=""
          />
          <img
            src={
              profileDetails?.profilePic
                ? BACKEND_URL + profileDetails?.profilePic
                : profilePicture
            }
            className={classes.profilePicture}
            alt=""
          />
          <div className={classes.profileData}>
            <h2 className={classes.username}>{profileDetails?.username}</h2>
            {user && id === user._id && (
              <button className={classes.followBtn} onClick={handleFollow}>
                {isFollowed ? "Followed" : "Follow"}
              </button>
            )}
          </div>


          <Link to={`/updateProfile/${id}`} className={classes.Updateprofile}>
               
               UpdateProfile
             </Link>

          {user?._id === id && <Share />}



          <div className={classes.posts}>
            {userPosts?.reverse().map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
