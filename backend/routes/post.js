const{createPost,getallPosts,getUserPosts,getPost,getTimelinePosts,updatePost,likePost,dislikePost,deletePost}=require("../controllers/postController")


const postRouter=require('express').Router()

const verifyToken = require('../middlewares/auth');



// Define routes
postRouter.get('/find/:id', getPost);
postRouter.get("/find/userposts/:id", getUserPosts);
postRouter.get('/timelinePosts', verifyToken, getTimelinePosts);
postRouter.post('/', verifyToken, createPost);

postRouter.put('/updatePost/:id', verifyToken, updatePost);


postRouter.put('/likePost/:postId', verifyToken, likePost);
postRouter.put('/dislikePost/:postId', verifyToken, dislikePost);

postRouter.delete('/deletePost/:id', verifyToken, deletePost);



postRouter.put("/dislikePost/:postId", verifyToken, dislikePost)
module.exports = postRouter;
