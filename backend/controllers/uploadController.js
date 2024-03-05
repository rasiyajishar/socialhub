const multer = require("multer")
const uploadRouter = require("express").Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
       cb(null,req.body.imageUrl)
    }
});


const upload = multer({ storage: storage });

uploadRouter.post('/', upload.single('photo'), (req, res) => {
    console.log(req.body)
    try {
        return res.status(201).json({msg: 'Successfully uploaded'})
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = uploadRouter


// const multer = require("multer");
// const uploadRouter = require("express").Router();
// const cloudinary = require("cloudinary").v2;
// const fs = require("fs");
// const Post = require("../models/Post"); // Import your Post model
// const path = require("path")

// const storage = multer.diskStorage({

// destination: path.join(__dirname,'uploads'),
// filename:(req, file, cb) => {
//     cb(null, Date.now() + file.originalname)
//     console.log("requsts:", req.body)
// }
// })



// // const storage = multer.diskStorage({
// //   destination: path.join(__dirname, 'uploads'), // Set your desired upload folder
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
// //     cb(null, uniqueSuffix + '-' + file.originalname); // Generate unique filenames
// //   },
// // });



// const upload = multer({ storage });

// cloudinary.config({
//   cloud_name: 'dlweshii1',
//   api_key: '348665113567648',
//   api_secret: 'DEL8csNSMNfyd-KvH-Y9sTo0UF4',  
// });

// uploadRouter.post("/", upload.single("photo"), async (req, res, next) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded." });
//     }

//     // Assuming `postedBy` is available in the request body or can be obtained from the request headers
//     const { postedBy } = req.body;
//     if (!postedBy) {
//       return res.status(400).json({ message: "postedBy is required." });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path, { folder: 'productsfb' });
//     console.log(result,"res")

//     // Create a new Post with the uploaded image URL and postedBy
//     const newPost = await Post.create({ imageUrl: result.secure_url, postedBy });

//     fs.unlink(req.file.path, (unlinkErr) => {
//       if (unlinkErr) {
//         console.error("Failed to delete local image file:", unlinkErr);
//       }
//     });

//     return res.status(201).json({ message: "Successfully uploaded", post: newPost });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     return res.status(500).json({ message: "Failed to upload image" });
//   }
// });

// module.exports = uploadRouter;




// const multer = require("multer");
// const uploadRouter = require("express").Router();
// const cloudinary = require("cloudinary").v2;
// const fs = require("fs");
// const Post = require("../models/Post"); // Import your Post model
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, 'uploads'), // Set your desired upload folder
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + '-' + file.originalname); // Generate unique filenames
//   },
// });

// const upload = multer({ storage });

// cloudinary.config({
//   cloud_name: 'dlweshii1',
//   api_key: '348665113567648',
//   api_secret: 'DEL8csNSMNfyd-KvH-Y9sTo0UF4',  
// });

// uploadRouter.post("/", upload.single("photo"), async (req, res, next) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded." });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path, { folder: 'productsfb' });
//     fs.unlinkSync(req.file.path); // Delete the local file after upload

//     const newPost = await Post.create({ imageUrl: result.secure_url, postedBy: req.body.postedBy });
//     return res.status(201).json({ message: "Successfully uploaded", post: newPost });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     return res.status(500).json({ message: "Failed to upload image" });
//   }
// });

// module.exports = uploadRouter;
