const User = require ('../models/User')
const Post = require('../models/Post')



//post by id
const getPost = async(req,res)=>{
    try {
    const post = await Post.findById (req.params.id)   
    return res.status(200).json(post)
    } catch (error) {
     return res.status(500).json(error.message)   
    }
}

const getUserPosts = async (req, res) => {
    try {
        const userPosts = await Post.find({ userId: req.params.id });
        if (userPosts == false || userPosts.length <= 0) {
            throw new Error("No posts from this user");
        } else {
            return res.status(200).json({
                status:"success",
                message:"successfully fetched allposts",
                data:userPosts
            });
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
};


const createPost = async (req, res) => {
    try {
        const isEmpty = Object.values(req.body).some(v => v === '');
        if (isEmpty) {
            return res.status(400).json({ error: "Fill all fields!" });
        }

        const post = await Post.create({ ...req.body, userId: req.user.id });
        return res.status(201).json(post);
    } catch (error) {
        console.error("Error creating post:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


// const createPost = async (req, res) => {
//     try {
//         // Check if any required fields are missing
//         const { desc, imageUrl } = req.body;
//         if (!desc || !imageUrl) {
//             return res.status(400).json({ error: "Fill all required fields!" });
//         }

//         // Extract user ID from request headers or body
//         const { userId } = req.body; // Assuming userId is passed in the request body

//         // Create a new post with the authenticated user's ID
//         const post = await Post.create({ desc, imageUrl, postedBy: userId });

//         return res.status(201).json(post);
//     } catch (error) {
//         console.error("Error creating post:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// };









// Delete a  post 

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) return res.status(404).json({message:"Post not fount"})
        
        if(post.userId === req.user.id){
            await post.deleteOne()
        
       

       return res.status(200).json({message:"Post deleted"})
        }else{
            throw new Error("you can delete only your post")
        }



    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in Delete Post",error.message) 
    }
}



//update a post
const updatePost = async (req, res) => {
    try {
       
const post = await Post.findById(req.params.id)

        res.status(200).json({message:"Post updated",updatedPost})
if(post.userId === req.user.id){
   const updatedPost=await Post.findByIdAndUpdate(
    req.params.id,
    {$set:req.body},
    {new:true}
   ) 

   return res.status(200).json(updatedPost)
}
else{
    throw new Error('you can update only your post')
}


    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in Update Post",error.message)
    }
}

// Like post 

const likePost = async (req, res) => {    
    try {
      
        const post = await Post.findById(req.params.postId)
        if(!post) return res.status(404).json({message:"Post not found"})

        const userLikedPost = post.likes.includes(req.user.id)

        if(userLikedPost){
throw new Error ("can not like  post 2 times");
        }else{
             await Post.findByIdAndUpdate(
                req.params.postId,
                {$push:{likes:req.user.id}},
                {new:true}
             )
        


         
            res.status(200).json({message:"Post Unliked succesfully"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}


const dislikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            throw new Error("No such post");
        }

        const isLikedByCurrentUser = post.likes.includes(req.user.id);
        if (isLikedByCurrentUser) {
            await Post.findByIdAndUpdate(
                req.params.postId,
                { $pull: { likes: req.user.id } },
                { new: true }
            );
            return res.status(200).json({ msg: "Post has been successfully unliked" });
        } else {
            throw new Error("Can't dislike that you haven't liked");
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getTimelinePosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user.id);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        );
        const allPosts=userPosts.concat(...friendPosts).sort((a, b) => b.createdAt - a.createdAt)
        return res.status(200).json({
            status:"success",
            message:"successfully fetched allposts",
            data:allPosts
        })
    } catch (err) {
        res.status(500).json(err);
    }
}



// Get all posts

const getallPosts = async (req,res) => {
    try {

        const post = await Post.find().populate({
            path: 'postedBy',
            select: ['username', 'profilePic']
            
        })

        
        if(!post) return res.status(400).json({message:"No Post yet"})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in Get Posts", error.message)
        
    }
}

module.exports = {
    getPost,
    getallPosts,getUserPosts,
    createPost,deletePost,updatePost,likePost,dislikePost,
    getTimelinePosts
}