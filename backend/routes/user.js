const { getUser, getAllUsers, updateUser, deleteUser,unfollowUser,followUser,getUserFriends } 
= require('../controllers/userController')
const verifyToken = require('../middlewares/auth')

const userRouter = require('express').Router()

userRouter.get('/findAll', getAllUsers)
userRouter.get('/find/:id', getUser)
userRouter.get('/find/userfriends/:id', getUserFriends)

userRouter.put('/update/:id', verifyToken, updateUser)
userRouter.post("/follow/:id", verifyToken ,followUser);
userRouter.post("/unfollow/:id", verifyToken ,unfollowUser);

userRouter.delete('/delete/:id', verifyToken, deleteUser)

module.exports = userRouter