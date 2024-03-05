const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3003;
const path = require("path");
require('dotenv').config();

const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comment");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const uploadRouter = require("./controllers/uploadController");

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));

// Routes
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/user", userRouter);
app.use("/upload", uploadRouter);




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






// // Import required modules
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const fs = require("fs");

// const app = express();
// const PORT = process.env.PORT || 4000;
// require('dotenv').config();

// const authRouter = require("./routes/auth");
// const commentRouter = require("./routes/comment");
// const postRouter = require("./routes/post");
// const userRouter = require("./routes/user");

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((error) => {
//     console.error("Failed to connect to MongoDB:", error.message);
//   });

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/images", express.static("public/images"));

// // Routes
// app.use("/auth", authRouter);
// app.use("/post", postRouter);
// app.use("/comment", commentRouter);
// app.use("/user", userRouter);

// // Define multer disk storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images"); // Set the destination path for uploaded files
//   },
//   filename: (req, file, cb) => {
//     // Generate a unique filename for uploaded files
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix); // Use a fieldname prefix for the filename
//   },
// });

// const upload = multer({ storage });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Route for handling file uploads
// app.post("/upload", upload.single("photo"), async (req, res, next) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded." });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path, { folder: 'products' });
//     console.log(result);

//     fs.unlink(req.file.path, (unlinkErr) => {
//       if (unlinkErr) {
//         console.error("Failed to delete local image file:", unlinkErr);
//       }
//     });

//     return res.status(201).json({ message: "Successfully uploaded", imageUrl: result.secure_url });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     return res.status(500).json({ message: "Failed to upload image" });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
