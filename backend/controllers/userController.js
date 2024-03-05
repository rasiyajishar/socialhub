const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



//to see all users
const getAll = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
   
      return res.status(200).json(users);
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// const allUsers = async (req, res) => {
//   try {
//       const users = User.find()
//       if(!users) return res.status(404).json({message:"Users Not Fount"})
//       res.status(200).json({Users:users})
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//       console.log("Error in find all users: ", error.message);
//   }
// }



// get logind user 

const getUser = async (req, res) => {
  try {
      
      const user = await User.findById(req.params.id)
      
      if(!user)return res.status(404).json({message:"User not found"})
      
      const {password,...others}= user._doc
      res.status(200).json(others)
      
  } catch (error) {
    return res.status(500).json({ message: error.message });
     
      
  }
  }


//userprofile

  const getUserProfile = async (req, res) => {
    const {username} = req.params
    try {
        const user = await User.findOne({username}).select("-password").select("-updatedAt")
        console.log(user._id)

        if(!user)return res.status(404).json({message:"user not fount"})

        const posts = await Posts.find({ postedBy: user.id });

        const userProfileWithPosts = {
            user: {
              _id: user._id,    
              username: user.username,
                post: user.text

            },
            posts: posts,
          };

        res.status(200).json(userProfileWithPosts)
    } catch (error) {

    res.status(500).json({ error: error.message });
    console.log("Error in get users profile: ", error.message);
    }
}


// Update Usesr 

// const updateUser = async (req, res) => {
//   // console.log("creaded")
//   const {name, email,  username, password, bio} = req.body
//   let {profilePic} = req.body

//   console.log("Profiel pic form boy",profilePic)
//   const userId = req.user._id

//  try {
//   let user = await User.findById(userId)
//   if(!user) return res.status(400).json({error:"User not found"})
  
//   if (req.params.id !== userId.toString())
//       return res.status(400).json({error: "You can't Update other user's profile"})

//   if(password){
//       const salt = await bcrypt.genSalt(10)
//       const hashedPassword = await bcrypt.hash(password, salt)
//       user.password = hashedPassword
//   }

//   if(profilePic){
//       if(user.profilePic){
//           await cloudinary.uploader.destroy(user.profilePic.split("/").pop(".")[0])
//       }
//       // const uploadProfile = await cloudinary.uploader.upload(profilePic)
//       // profilePic = uploadProfile.secure_url
//   }

//   user.name = name || user.name
//   user.email = email || user.email
//   user.username = username || user.username;
//   user.profilePic = profilePic || user.profilePic
//   user.bio = bio || user.bio

//   user = await user.save()

//   res.status(200).json({message:"Profile upadated succesfully",user})
//  } catch (error) {
//   res.status(500).json({ error: error.message });
// console.log("Error in updateUser: ", error.message);
//  }
// }


const updateUser = async (req, res) => {
    console.log(req.params.id)
    if (req.params.id === req.user.id) {
      try {
        if (req.body.password) {
          const newHashedPassword = await bcrypt.hash(req.body.password, 10);
          req.body.password = newHashedPassword;
        }
  
        const user = await User.findByIdAndUpdate(
        
       
          req.params.id,
          { $set: req.body },
          { new: true }
        );
  
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json(error.message);
      }  
    } else {
      return res.status(403).json({ msg: "You can update only your profile!" });
    }
  };
  
  const deleteUser = async (req, res) => {
    if (req.params.id === req.body.userId) {
      try {
        const user = await User.findById(req.params.id);
        if (!user) {
          throw new Error("User does not exists");
        }
  
        await User.findByIdAndDelete(req.params.id);
  
        return res.status(200).json({ msg: "Successfully deleted!" });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } else {
      return res.status(403).json({ msg: "You can delete only your profile!" });
    }
  };
  
  const getUserFriends = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        throw new Error("User does not exists");
      }
  
      const userFriends = await Promise.all(
        user.followings.map((friendId) => {
          return User.findById(friendId).select("-password");
        })
      );
  
      if (userFriends.length > 0) {
        return res.status(200).json(userFriends);
      } else {
        throw new Error("You have no friends");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  
  // Follow     

  

const followUser = async(req,res)=>{
  if(req.params.id !== req.user.id){
    try {
      
      const friend = await User.findById(req.params.id)
if(!friend){
  throw new Error("no such user with this id")
}
if(friend.followers.includes(req.user.id)){
  throw new Error("can not follow the same user twice")
}

await User.findByIdAndUpdate(
  req.params.id,
  {$push:{followers:req.user.id}}
)
return res.status(200).json({msg:"you have successfully followed the user"})

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }else{
    return res.status(500).json({msg:"you can't follow yourself"})
  }
}


const unfollowUser = async(req,res)=>{
if(req.params.id !== req.user.id){
try{
const friend = await User.findById(req.params.id)
if(!friend){
  throw new Error("no such user exists")
}
if(!friend.followers.includes(req.user.id)){
  throw new Error("can,t unfollow a user that we do not follow")
}
await User.findByIdAndUpdate(
  req.params.id,
  {
  $pull:{followers:req.user.id}
  }
)
await User.findByIdAndUpdate(
  req.user.id,
  {$pull:{followings:req.params.id}}
)
return res.status(200).json({msg:"you have successfully unfollowed the user"})
}catch(error){
  return res.status(500).json(error.message)
}
}else{
  return res.status(500).json({msg:"you can't follow unfollow yourself"})
}
}

module.exports ={
    getAll,unfollowUser,
    getUser, getUserProfile,followUser,updateUser,deleteUser,getUserFriends
}