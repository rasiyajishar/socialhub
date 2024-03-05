// import React, { useState, useEffect } from 'react';
// import classes from "./posts.module.css"
// import axios from 'axios'; 
// import Share from '../share/Share';
// import Post from '../post/Post'
// import { useSelector } from 'react-redux';

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const {token}=useSelector((state)=>state.auth)
 

//   useEffect(() => {
//     const fetchTimelinePosts = async () => {
//       try {
//         const headers = {
//           'Authorization': `Bearer ${token}`
//         };

//         const data = await axios.get('http://localhost:3003/post/timelinePosts', headers );
//         console.log(data)
//         setPosts(data);

//       } catch (error) {
//         console.error(error);
       
//       }
//     };
  
//     fetchTimelinePosts();
//   }, []);






  
//   return (
//     <div className={classes.container}>
//       <div className={classes.container1}>
// <Share />
// <div className={classes.posts}>
// {posts && posts.map((post) => (
//   <Post post={post} key={post._id}/>
// ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Posts;


import React, { useState, useEffect } from 'react';
import classes from "./posts.module.css"
import axios from 'axios'; 
import Share from '../share/Share';
import Post from '../post/Post'
import { useSelector } from 'react-redux';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchTimelinePosts = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${token}`
        };

        const response = await axios.get('http://localhost:3003/post/timelinePosts', { headers });
        console.log(response.data.data,"res")
        setPosts(response.data.data); // Assuming post data is nested under 'data'

      } catch (error) {
        console.error('Error fetching timeline posts:', error);
      }
    };

    fetchTimelinePosts();
  }, [token]); // Add token to the dependency array

  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <Share />
        <div className={classes.posts}>
  {posts && posts.map((post) => (
    <Post post={post} key={post._id} />
  ))}
</div>

      </div>
    </div>
  );
};

export default Posts;