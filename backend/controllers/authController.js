// const User = require('../models/User')
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")
// const authSchema = require("./validation")


// // USER REGISTRATION
// const register = async (req, res) => {
//   console .log("hello")
//     const { error, value } = authSchema.validate(req.body);
//     const { username, email, password } = value;
//     const findUser = await User.findOne({ email: email });
//    console.log(findUser)
//     if (error) {
//       res.status(422).json({
//         status: "error",
//         message: error.details[0].message,
//       });
//     } else if (findUser) {
//       res.status(409).json({
//         status: "error",
//         message: "User with this email already exists",
//       });
//     } else {
//       await User.create({
//         username: username,
//         email: email,
//         password: await bcrypt.hash(password, 10),
//       });
//       res.status(200).json({
//         status: "success",
//         message: "successfully register",
//       });
//     }
//   };
  
  
  


// // USER OR ADMIN LOGIN

// const login = async (req, res) => {
//   try {
//     const adminEmail = "admin@gmail.com";
//     const { error, value } = authSchema.validate(req.body);

//     if (!error) {
//       const { email, password } = value;

//       if (email === adminEmail && password === process.env.ADMIN_PASSWORD) {
//         const adminToken = jwt.sign({ email: adminEmail, role: 'admin' }, process.env.ADMIN_SECRET_KEY);
//         res.status(200).json({
//           auth: true,
//           message: "Successfully admin logged in",
//           adminEmail: email,
//           token: adminToken,
//         });
//       } else {
//         const registeredUser = await User.findOne({ email });

//         if (!registeredUser) {
//           return res.status(401).json({
//             status: "failed",
//             message: "User not found. Please register first.",
//           });
//         }

//         const isPasswordValid = await bcrypt.compare(password, registeredUser.password);

//         if (isPasswordValid) {
//           const userToken = jwt.sign({ id: registeredUser._id, email: registeredUser.email }, process.env.ACCESS_TOKEN_SECRET);
//           return res.status(200).json({
//             auth: true,
//             message: "Successfully logged in",
//             token: userToken,
//           });
//         } else {
//           return res.status(401).json({
//             status: "failed",
//             message: "Incorrect password. Login failed.",
//           });
//         }
//       }
//     } else {
//       return res.status(422).json({
//         status: "error",
//         message: error.details[0].message,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };



// module.exports = {
//     register,login
// }




// const User = require('../models/User')
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")
// const authSchema = require("./validation")


// // USER REGISTRATION
// const register = async (req, res) => {

//   try {
//     const IsEmpty = Object.values(req.body).some((v) => !v)


//  if(IsEmpty){
//       throw new Error("fill all fields")
//     }

// const isExisting = await User.findOne({username:req.body.username})
// if(isExisting){
//   throw new Error("username haas been already used")
// }

// const hashedPassword = await bcrypt .hash(req.body.password,10)
// const newUser = await User.create({...req.body,password:hashedPassword})

// const payload = {id:newUser._id,username:newUser.username}
//   const jwt = jwt.sign(payload,process.env.JWT_SECRET)

// const {password,...others}=newUser._doc
// return res.status(201).json({token,others})


// } catch (error) {
//     return res.status(500).json(error.message)
//   }
  
 
//   };
  
  
  


// // USER OR ADMIN LOGIN

// const login = async (req, res) => {
//   try {
//     const IsEmpty = Object.values(req.body).some((v) => !v)
//     if(IsEmpty){
//       throw new Error("fill all fields")
//     }


//     const user =await User.findOne({email:req.body.email})

// if(!user){
//   throw new Error("wrong credentials")
// }


// const comparepass = await bcrypt.compare(req.body.password,user.password)
// if(!comparepass){
//   throw new Error("wrong credentials")
// }


// const payload = {id:user._id,username:user.username}

// const {password,...others}=user._doc
// const token = jwt.sign(payload,process.env.JWT_SECRET)
  
// return res.status(200).json({others,token})

// }  catch (error) {
//   return res.status(500).json(error.message)
// }


// };



// module.exports = {
//     register,login
// }


const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authSchema = require("./validation");

// USER REGISTRATION
const register = async (req, res) => {
  try {
    const isEmpty = Object.values(req.body).some((v) => !v);

    if (isEmpty) {
      throw new Error("Fill all fields");
    }

    const isExisting = await User.findOne({ username: req.body.username });
    if (isExisting) {
      throw new Error("Username has already been used");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({...req.body, password: hashedPassword});

    const payload = { id: newUser._id, username: newUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    const { password, ...others } = newUser._doc;
    return res.status(201).json({ token, user: others });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// USER OR ADMIN LOGIN
const login = async (req, res) => {
  try {
    const isEmpty = Object.values(req.body).some((v) => !v);
    if (isEmpty) {
      throw new Error("Fill all fields");
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Wrong credentials");
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      throw new Error("Wrong credentials");
    }

    const payload = { id: user._id, username: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    const { password, ...others } = user._doc;
    return res.status(200).json({ token, user: others });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
