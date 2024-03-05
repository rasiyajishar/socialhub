// import React, { useState } from 'react';
// import classes from './share.module.css';

// import { AiFillCamera, AiFillSmile, AiOutlineClose } from 'react-icons/ai';
// import { IoMdPhotos } from 'react-icons/io';
// import profile from '../../Images/profile11.jpg';
// import {useSelector} from "react-redux"
// import {request} from '../../utils/request'
// const Share = () => {
//   const [desc, setDesc] = useState('');
//   const [photo, setPhoto] = useState('');
// const {token}=useSelector((state)=>state.auth)

//   const handleCreatePost = async () => {
//     try {
//       let filename=null

// if(photo){
//   const formData = new FormData()
//   filename=crypto.randomUUID()+photo.name
//   formData.append("imageUrl" ,filename)
//   formData.append("photo",photo)
//   await request ("/upload","POST",{},formData,true)
// }
// else{
//   return
// }
// const headers ={
//   'Content-Type':'application/json',
//   'Authorization':`Bearer ${token}`
// }
// const body = {
//   desc,
//   imageUrl:filename
// }

// await request ("/post" ,"POST",headers,body)
// window.location.reload()

//     } catch (error) {
//       console.log(error)
//     }

//   };

//   return (
//     <div className={classes.share}>
//       <div className={classes.sharetop}>
//         <img src={profile} alt="profile" />
//         <input
//           type="text"
//           placeholder="share your openion"
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <button onClick={handleCreatePost}>POST</button>
//       </div>
//       <div className={classes.shareBottom}>
//         <div className={classes.item}>
//           Live Video
//           <AiFillCamera />
//         </div>
//         <label htmlFor="photo" className={classes.item}>
//           Photo
//           <IoMdPhotos />
//         </label>
//         <div className={classes.item}>
//           Activity
//           <AiFillSmile />
//         </div>
//         <input
//           style={{ display: "none" }}
//           type="file"
//           id="photo"
//           onChange={(e) => setPhoto(e.target.files[0])}
//         />
//       </div>
//       {photo && (
//         <div className={classes.photocontainer}>
//           <AiOutlineClose
//             className={classes.closeIcon}
//             onClick={() => setPhoto("")}
//           />
//           <img
//             src={URL.createObjectURL(photo)}
//             alt="imagefile"
//             className={classes.photo}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Share;

// import React, { useState } from 'react';
// import classes from './share.module.css';

// import { AiFillCamera, AiFillSmile, AiOutlineClose } from 'react-icons/ai';
// import { IoMdPhotos } from 'react-icons/io';
// import profile from '../../Images/profile11.jpg';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const Share = () => {
//   const [desc, setDesc] = useState('');
//   const [photo, setPhoto] = useState('');
//   const { token } = useSelector((state) => state.auth);

//   console.log(token)

//   // const handleCreatePost = async () => {
//   //     try {
//   //         let filename = null;

//   //         if (photo) {
//   //             const formData = new FormData();
//   //             filename = crypto.randomUUID() + photo.name;
//   //             formData.append("imageUrl", filename);
//   //             formData.append("photo", photo);

//   //         await axios.post('http://localhost:3003/upload',{}, formData,true)

//   //   } else {
//   //       return;
//   //   }

//   //   const body = {
//   //     imageUrl: filename,
//   //     desc
//   //   }

//   //         await axios.post('http://localhost:3003/post', body, {
//   //             headers: {
//   //                 'Content-Type': 'application/json',
//   //                 'Authorization': `Bearer ${token}`
//   //             }
//   //         });
//   //         window.location.reload();
//   //     } catch (error) {
//   //         console.error(error);
//   //     }
//   // };

//   const handleCreatePost = async () => {
//     try {
//       if (!photo || !desc) {
//         return;
//       }

//       const formData = new FormData();
//       formData.append("photo", photo);
//       formData.append("postedBy", "SomeUserId"); // Replace with actual postedBy data

//       const response = await axios.post('http://localhost:3003/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const imageUrl = response.data.post.imageUrl;
//       await axios.post('http://localhost:3003/post', { imageUrl, desc }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       window.location.reload();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className={classes.share}>
//       <div className={classes.sharetop}>
//         <img src={profile} alt="profile" />
//         <input
//           type="text"
//           placeholder="share your opinion"
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <button onClick={handleCreatePost}>POST</button>
//       </div>
//       <div className={classes.shareBottom}>
//         <div className={classes.item}>
//           Live Video
//           <AiFillCamera />
//         </div>
//         <label htmlFor="photo" className={classes.item}>
//           Photo
//           <IoMdPhotos />
//         </label>
//         <div className={classes.item}>
//           Activity
//           <AiFillSmile />
//         </div>
//         <input
//           style={{ display: 'none' }}
//           type="file"
//           id="photo"
//           onChange={(e) => setPhoto(e.target.files[0])}
//         />
//       </div>
//       {photo && (
//         <div className={classes.photocontainer}>
//           <AiOutlineClose
//             className={classes.closeIcon}
//             onClick={() => setPhoto('')}
//           />
//           <img
//             src={URL.createObjectURL(photo)}
//             alt="imagefile"
//             className={classes.photo}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Share;

// import React, { useState } from 'react';
// import classes from './share.module.css';
// import { AiFillCamera, AiFillSmile, AiOutlineClose } from 'react-icons/ai';
// import { IoMdPhotos } from 'react-icons/io';
// import profile from '../../Images/profile11.jpg';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const Share = () => {
//   const [desc, setDesc] = useState('');
//   const [photo, setPhoto] = useState('');
//   const { token,userId } = useSelector((state) => state.auth);

//   const handleCreatePost = async () => {
//     try {
//       if (!photo || !desc) {
//         return;
//       }

//       const formData = new FormData();
//       formData.append("photo", photo);
//       formData.append("postedBy", userId);

//       const response = await axios.post('http://localhost:3003/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const imageUrl = response.data.imageUrl;
//       await axios.post('http://localhost:3003/post', { imageUrl, desc }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       window.location.reload();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className={classes.share}>
//       <div className={classes.sharetop}>
//         <img src={profile} alt="profile" />
//         <input
//           type="text"
//           placeholder="share your opinion"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <button onClick={handleCreatePost}>POST</button>
//       </div>
//       <div className={classes.shareBottom}>
//         <div className={classes.item}>
//           Live Video
//           <AiFillCamera />
//         </div>
//         <label htmlFor="photo" className={classes.item}>
//           Photo
//           <IoMdPhotos />
//         </label>
//         <div className={classes.item}>
//           Activity
//           <AiFillSmile />
//         </div>
//         <input
//           style={{ display: 'none' }}
//           type="file"
//           id="photo"
//           onChange={(e) => setPhoto(e.target.files[0])}
//         />
//       </div>
//       {photo && (
//         <div className={classes.photocontainer}>
//           <AiOutlineClose
//             className={classes.closeIcon}
//             onClick={() => setPhoto('')}
//           />
//           <img
//             src={URL.createObjectURL(photo)}
//             alt="imagefile"
//             className={classes.photo}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Share;

// import React, { useState } from 'react';
// import classes from './share.module.css';
// import { AiFillCamera, AiFillSmile, AiOutlineClose } from 'react-icons/ai';
// import { IoMdPhotos } from 'react-icons/io';
// import profile from '../../Images/profile11.jpg';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const Share = () => {
//   const [desc, setDesc] = useState('');
//   const [photo, setPhoto] = useState('');
//   const { token, userId } = useSelector((state) => state.auth); // Destructure userId from state.auth

//   const handleCreatePost = async () => {
//     try {
//       if (!photo || !desc) {
//         return;
//       }

//       const formData = new FormData();
//       formData.append("photo", photo);
//       formData.append("desc", desc);
//       formData.append("postedBy", userId); // Populate postedBy field with userId

//       const response = await axios.post('http://localhost:3003/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const imageUrl = response.data.imageUrl; // Extract imageUrl from response

//       // Include postedBy field in the request body
//       const postData = {
//         imageUrl,
//         desc,
//         postedBy: userId // Include postedBy field
//       };

//       await axios.post('http://localhost:3003/post', postData, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       // Removed unnecessary window.location.reload()

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className={classes.share}>
//       <div className={classes.sharetop}>
//         <img src={profile} alt="profile" />
//         <input
//           type="text"
//           placeholder="share your opinion"
//           value={desc} // Bind input value to desc state
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <button onClick={handleCreatePost}>POST</button>
//       </div>
//       <div className={classes.shareBottom}>
//         <div className={classes.item}>
//           Live Video
//           <AiFillCamera />
//         </div>
//         <label htmlFor="photo" className={classes.item}>
//           Photo
//           <IoMdPhotos />
//         </label>
//         <div className={classes.item}>
//           Activity
//           <AiFillSmile />
//         </div>
//         <input
//           style={{ display: 'none' }}
//           type="file"
//           id="photo"
//           onChange={(e) => setPhoto(e.target.files[0])}
//         />
//       </div>
//       {photo && (
//         <div className={classes.photocontainer}>
//           <AiOutlineClose
//             className={classes.closeIcon}
//             onClick={() => setPhoto('')}
//           />
//           <img
//             src={URL.createObjectURL(photo)}
//             alt="imagefile"
//             className={classes.photo}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Share;

// import React, { useState } from "react";
// import classes from "./share.module.css";
// import { AiFillCamera, AiFillSmile, AiOutlineClose } from "react-icons/ai";
// import { IoMdPhotos } from "react-icons/io";
// import profile from "../../Images/profile11.jpg";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const Share = () => {
//   const [desc, setDesc] = useState("");
//   const [photo, setPhoto] = useState(null); // Initialize photo state as null
//   const { token, userId } = useSelector((state) => state.auth);

//   const handleCreatePost = async () => {
//     try {
//       let filename = null;

//       if (photo) {
//         const formData = new FormData();
//         filename = crypto.randomUUID() + photo.name;
//         formData.append("imageUrl", filename);
//         formData.append("photo", photo);
//         await axios.post("http://localhost:3003/upload", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           }
//           });
//       } else {
//         console.error("No photo selected");
//         return;
//       }
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       };

//       const body = {
//         desc,
//         imageUrl: filename,
//       };

//       await axios.post("http://localhost:3003/post", headers, body);
//       window.location.reload();
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <div className={classes.share}>
//       <div className={classes.sharetop}>
//         <img src={profile} alt="profile" />
//         <input
//           type="text"
//           placeholder="Share your opinion"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <button onClick={handleCreatePost}>POST</button>
//       </div>
//       <div className={classes.shareBottom}>
//         <div className={classes.item}>
//           Live Video
//           <AiFillCamera />
//         </div>
//         <label htmlFor="photo" className={classes.item}>
//           Photo
//           <IoMdPhotos />
//         </label>
//         <div className={classes.item}>
//           Activity
//           <AiFillSmile />
//         </div>
//         <input
//           style={{ display: "none" }}
//           type="file"
//           id="photo"
//           onChange={(e) => setPhoto(e.target.files[0])}
//         />
//       </div>
//       {photo && (
//         <div className={classes.photocontainer}>
//           <AiOutlineClose
//             className={classes.closeIcon}
//             onClick={() => setPhoto(null)} // Reset photo state to null
//           />
//           <img
//             src={URL.createObjectURL(photo)}
//             alt="imagefile"
//             className={classes.photo}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Share;


import React, { useState } from "react";
import classes from "./share.module.css";
import { AiFillCamera, AiFillSmile, AiOutlineClose } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import profile from "../../Images/profile11.jpg";
import { useSelector } from "react-redux";
import axios from "axios";

const Share = () => {
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);
  const { token, userId } = useSelector((state) => state.auth);

  const handleCreatePost = async () => {
    try {
      if (!token) {
        console.error("No valid token provided");
        return;
      }

      let filename = null;

      if (photo) {
        const formData = new FormData();
        filename = crypto.randomUUID() + photo.name;
        formData.append("imageUrl", filename);
        formData.append("photo", photo);
        
        await axios.post("http://localhost:3003/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        console.error("No photo selected");
        return;
      }

      const postData = {
        desc,
        imageUrl: filename,
      };

      await axios.post("http://localhost:3003/post", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.reload();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className={classes.share}>
      <div className={classes.sharetop}>
        <img src={profile} alt="profile" />
        <input
          type="text"
          placeholder="Share your opinion"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleCreatePost}>POST</button>
      </div>
      <div className={classes.shareBottom}>
        <div className={classes.item}>
          Live Video
          <AiFillCamera />
        </div>
        <label htmlFor="photo" className={classes.item}>
          Photo
          <IoMdPhotos />
        </label>
        <div className={classes.item}>
          Activity
          <AiFillSmile />
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          id="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </div>
      {photo && (
        <div className={classes.photocontainer}>
          <AiOutlineClose
            className={classes.closeIcon}
            onClick={() => setPhoto(null)}
          />
          <img
            src={URL.createObjectURL(photo)}
            alt="imagefile"
            className={classes.photo}
          />
        </div>
      )}
    </div>
  );
};

export default Share;
