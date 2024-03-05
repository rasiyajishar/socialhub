import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import classes from './comment.module.css'
import { format } from 'timeago.js'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import axios from 'axios'
import profile from "../../Images/profile11.jpg";


const Comment = ({ comment }) => {
  const { user, token } = useSelector((state) => state.auth);
  const [commentAuthor, setCommentAuthor] = useState("");
  const [isLiked, setIsLiked] = useState(comment?.likes.includes(user?._id) || false);

  useEffect(() => {
    const fetchCommentAuthor = async () => {
      try {
        if (comment && comment.userId) {
          const data = await axios.get(`http://localhost:3003/user/find/${comment.userId}`);
          setCommentAuthor(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCommentAuthor();
  }, [comment?.userId]);

  const handleLikeComment = async () => {
    try {
      const headers = { 'Authorization': `Bearer ${token}` };
      if (comment && comment._id) {
        await axios.put(`http://localhost:3003/comment/toggleLike/${comment._id}`, headers);
        setIsLiked((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.comment}>
      <div className={classes.commentLeft}>
        <img src={profile} className={classes.commentImg} alt="img not found" />
        <div className={classes.commentDetails}>
          <h4>{commentAuthor && commentAuthor.username}</h4>
          <span>{format(comment?.createdAt)}</span>
        </div>
        <div className={classes.commentText}>{comment?.text}</div>
      </div>
      {isLiked ? <AiFillHeart onClick={handleLikeComment} /> : <AiOutlineHeart onClick={handleLikeComment} />}
    </div>
  );
};

export default Comment;
