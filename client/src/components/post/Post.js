// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import classes from "./post.module.css";
// import profile from "../../Images/profile11.jpg";
// import natureimg from "../../Images/natureimg.jpg";
// import { format } from "timeago.js";
// import { IoMdSettings, IoMdShareAlt } from "react-icons/io";
// import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
// import Comment from "../comment/Comment";

// import { useSelector } from "react-redux";
// import axios from "axios";

// const Post = ({ post }) => {
//   const [authorDetails, setAuthorDetails] = useState('');
//   const [isLiked, setIsLiked] = useState(post?.likes?.includes(user._id));
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
// const {user,token} = useSelector((state) => state.auth)
  


// useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         // const response = await axios.get(`http://localhost:3003/user/find/${post.userId}`);
//         const data = await axios.get(`http://localhost:3003/user/find/${post.userId}`);
//         setAuthorDetails(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchDetails();
//   }, [post._id]);


// useEffect(()=>{
//   const fetchComments = async()=>{
//     try {
//       const data = await axios.get(`http://localhost:3003/comment/${post._id}`)
//    console.log(data)
//       setComments(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   fetchComments()
// },[post._id])




//   const handleLike = async () => {
//     const headers = {
//       'Authorization': `Bearer ${token}`
//     }
//     try {
//       await axios.put(`http://localhost:3003/post/likePost/${post._id}`,headers);
//       setIsLiked(prev => !prev)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDislike = async () => {

//     const headers = {
//       'Authorization': `Bearer ${token}`
//     }

//     try {
//       await axios.put(`http://localhost:3003/post/dislikePost/${post?._id}`,headers);
//       setIsLiked(prev => !prev)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeletePost = async () => {
//     try {
//       const headers = {
//         'Authorization': `Bearer ${token}`
//       }
//       await axios.delete(`http://localhost:3003/post/deletePost/${post._id}`,headers);
//       window.location.reload();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleComment = async (e) => {
//     e.preventDefault();
//     try {

//       const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//       const response = await axios.post("http://localhost:3003/comment",headers, {
//         text: commentText,
//         postId: post._id,
//       });
//       setComments((prev) => [response.data, ...prev]);
//       setCommentText("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className={classes.post}>
//       <div className={classes.top}>
//         <Link to={`/Profile/${authorDetails._id}`} className={classes.topleft}>
//           <img src={profile} alt="profile" className={classes.postauthorimg} />
//           <div className={classes.postDetails}>
//             <span>{authorDetails.username}</span>
//             <span className={classes.date}>{format(post?.createdAt)}</span>
//           </div>
//         </Link>
//         {user._id === post?.userId && (
//           <IoMdSettings onClick={() => setShowDeleteModal((prev) => !prev)} />
//         )}
//         {showDeleteModal && (
//           <span className={classes.deleteModal} onClick={handleDeletePost}>
//             Delete post
//           </span>
//         )}
//       </div>
//       <p className={classes.desc}>{post?.desc}</p>
//       <div className={classes.postImgContainer}>
//         <img
//           src={
//             post.imageUrl
//               ? `http://localhost:3003/images/${post.imageUrl}`
//               : {natureimg}
//           }
//           alt="not found"
//           className={classes.postImg}
//         />
//       </div>
//       <div className={classes.actions}>
//         {!isLiked && (
//           <span className={classes.action} onClick={handleLike}>
//             Like <AiOutlineLike />
//           </span>
//         )}
//         {isLiked && (
//           <span className={classes.action} onClick={handleDislike}>
//             Liked <AiFillLike />
//           </span>
//         )}
//         <span
//           className={classes.action}
//           onClick={() => setShowComments((prev) => !prev)}
//         >
//           Comment <AiOutlineComment />
//         </span>
//         <span className={classes.action}>
//           Share <IoMdShareAlt />
//         </span>
//       </div>
//       {showComments && (
//         <>
//           <div className={classes.comments}>
//             {comments?.length > 0 ? (
//               comments?.map((comment) => (
//                 <Comment comment={comment} key={comment._id} />
//               ))
//             ) : (
//               <h3 style={{ padding: "1.25rem" }}>No comments yet.</h3>
//             )}
//           </div>
//           <form className={classes.commentSection} onSubmit={handleComment}>
//             <textarea
//               value={commentText}
//               type="text"
//               placeholder="Type comment..."
//               onChange={(e) => setCommentText(e.target.value)}
//             />
//             <button type="submit">Post</button>
//           </form>
//         </>
//       )}

     
//     </div>



//   );
// };

// export default Post;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import classes from "./post.module.css";
// import profile from "../../Images/profile11.jpg";
// import natureimg from "../../Images/natureimg.jpg";
// import { format } from "timeago.js";
// import { IoMdSettings, IoMdShareAlt } from "react-icons/io";
// import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
// import Comment from "../comment/Comment";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const Post = ({ post }) => {


  
//   const [authorDetails, setAuthorDetails] = useState({});
 
//   const [showModal, setShowModal] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const { user, token } = useSelector((state) => state.auth);
//   const [isLiked, setIsLiked] = useState(post?.likes?.includes(user?._id));




//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:3003/user/find/${post?.userId}`
//         );
//         setAuthorDetails(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchDetails();
//   }, [post.userId]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:3003/comment/${post?._id}`
//         );
//         setComments(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchComments();
//   }, [post._id]);

//   const handleLike = async () => {
//     try {
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       await axios.put(
//         `http://localhost:3003/post/likePost/${post._id}`,
//         null,
//         { headers }
//       );
//       setIsLiked(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDislike = async () => {
//     try {
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       await axios.put(
//         `http://localhost:3003/post/dislikePost/${post._id}`,
//         null,
//         { headers }
//       );
//       setIsLiked(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeletePost = async () => {
//     try {
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//       await axios.delete(`http://localhost:3003/post/deletePost/${post._id}`, {
//         headers,
//       });
//       window.location.reload();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleComment = async (e) => {
//     e.preventDefault();
//     try {
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       };
//       const response = await axios.post(
//         "http://localhost:3003/comment",
//         { text: commentText, postId: post._id },
//         { headers }
//       );
//       setComments((prev) => [response.data, ...prev]);
//       setCommentText("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className={classes.post}>
//       <div className={classes.top}>
//         <Link to={authorDetails._id ? `/profile/${authorDetails._id}` : ""} className={classes.topLeft}>
//           <img
//             src={profile}
//             alt="profile"
//             className={classes.postAuthorImg}
//           />
//           <div className={classes.postDetails}>
//             <span>{authorDetails?.username}</span>
//             <span className={classes.date}>{format(post?.createdAt)}</span>
//           </div>
//         </Link>
//         {user._id === post?.userId && (
//           <IoMdSettings onClick={() => setShowModal((prev) => !prev)} />
//         )}
//         {showModal && (
//           <span className={classes.deleteModal} onClick={handleDeletePost}>
//             Delete post
//           </span>
//         )}
//       </div>
//       <p className={classes.desc}>{post?.desc}</p>
//       <div className={classes.postImgContainer}>
//         <img
//           src={post.imageUrl ? `http://localhost:3003/images/${post.imageUrl}` : natureimg}
//              className={classes.postImg} 
         
//           alt="not found"
         
//         />
//       </div>
//       <div className={classes.actions}>
//         {!isLiked && (
//           <span className={classes.action} onClick={handleLike}>
//             Like <AiOutlineLike />
//           </span>
//         )}
//         {isLiked && (
//           <span className={classes.action} onClick={handleDislike}>
//             Liked <AiFillLike />
//           </span>
//         )}
//         <span
//           className={classes.action}
//           onClick={() => setShowComments((prev) => !prev)}
//         >
//           Comment <AiOutlineComment />
//         </span>
//         <span className={classes.action}>
//           Share <IoMdShareAlt />
//         </span>
//       </div>
//       {showComments && (
//         <>
//           <div className={classes.comments}>
//             {comments?.length > 0 ? (
//               comments?.map((comment) => (
//                 <Comment comment={comment} key={comment._id} />
//               ))
//             ) : (
//               <h3 style={{ padding: "1.25rem" }}>No comments yet.</h3>
//             )}
//           </div>
//           <form className={classes.commentSection} onSubmit={handleComment}>
//             <textarea
//               value={commentText}
//               type="text"
//               placeholder="Type comment..."
//               onChange={(e) => setCommentText(e.target.value)}
//             />
//             <button type="submit">Post</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default Post;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./post.module.css";
import profile from "../../Images/profile11.jpg";
import natureimg from "../../Images/natureimg.jpg";
import { format } from "timeago.js";
import { IoMdSettings, IoMdShareAlt } from "react-icons/io";
import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import Comment from "../comment/Comment";
import { useSelector } from "react-redux";
import axios from "axios";

const Post = ({ post }) => {
  const [authorDetails, setAuthorDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user, token } = useSelector((state) => state.auth);
  const [isLiked, setIsLiked] = useState(post?.likes?.includes(user?._id));

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3003/user/find/${post?.userId}`
        );
        setAuthorDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [post.userId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3003/comment/${post?._id}`
        );
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [post._id]);

  const handleLike = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.put(
        `http://localhost:3003/post/likePost/${post._id}`,
        null,
        { headers }
      );
      setIsLiked(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDislike = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.put(
        `http://localhost:3003/post/dislikePost/${post._id}`,
        null,
        { headers }
      );
      setIsLiked(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePost = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.delete(`http://localhost:3003/post/deletePost/${post._id}`, {
        headers,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        "http://localhost:3003/comment",
        { text: commentText, postId: post._id },
        { headers }
      );
      setComments((prev) => [response.data, ...prev]);
      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.post}>
      <div className={classes.top}>
        <Link to={authorDetails?._id ? `/profile/${authorDetails._id}` : ""} className={classes.topLeft}>
          <img
            src={profile}
            alt="profile"
            className={classes.postAuthorImg}
          />
          <div className={classes.postDetails}>
            <span>{authorDetails?.username}</span>
            <span className={classes.date}>{format(post?.createdAt)}</span>
          </div>
        </Link>
        {user?._id === post?.userId && (
          <IoMdSettings onClick={() => setShowModal((prev) => !prev)} />
        )}
        {showModal && (
          <span className={classes.deleteModal} onClick={handleDeletePost}>
            Delete post
          </span>
        )}
      </div>
      <p className={classes.desc}>{post?.desc}</p>
      <div className={classes.postImgContainer}>
        <img
          src={post?.imageUrl ? `http://localhost:3003/images/${post.imageUrl}` : natureimg}
          className={classes.postImg}
          alt="not found"
        />
      </div>
      <div className={classes.actions}>
        {!isLiked && (
          <span className={classes.action} onClick={handleLike}>
            Like <AiOutlineLike />
          </span>
        )}
        {isLiked && (
          <span className={classes.action} onClick={handleDislike}>
            Liked <AiFillLike />
          </span>
        )}
        <span
          className={classes.action}
          onClick={() => setShowComments((prev) => !prev)}
        >
          Comment <AiOutlineComment />
        </span>
        <span className={classes.action}>
          Share <IoMdShareAlt />
        </span>
      </div>
      {showComments && (
        <>
          <div className={classes.comments}>
            {comments?.length > 0 ? (
              comments?.map((comment) => (
                <Comment comment={comment} key={comment._id} />
              ))
            ) : (
              <h3 style={{ padding: "1.25rem" }}>No comments yet.</h3>
            )}
          </div>
          <form className={classes.commentSection} onSubmit={handleComment}>
            <textarea
              value={commentText}
              type="text"
              placeholder="Type comment..."
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Post;
