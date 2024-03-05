// import React, { useState, useEffect } from 'react';
// import classes from './friends.module.css';
// import profile from '../../Images/profile11.jpg';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const Friends = () => {
//   const [friends, setFriends] = useState([]);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const fetchFriends = async () => {
//       try {
//         if (user && user._id) {
//           const response = await axios.get(`http://localhost:3003/find/userfriends/${user._id}`);
          
//           console.log(response)
//           console.log("Response from server:", response.data);
//           setFriends(response.data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchFriends();
//   }, [user]);

//   return (
//     <div className={classes.container}>
//       <div className={classes.wrapper}>
//         {friends?.length > 0 ? <h3>Your friends</h3> : ''}
//         {friends?.length > 0 ? (
//           friends.map((friend) => (
//             <div key={friend._id} className={classes.friend}>
//               <img src={friend?.profilePic ? `http://localhost:3003/public/images/${friend.profilePic}` : profile} className={classes.friendImg} alt="" />
//               <span>{friend.username}</span>
//             </div>
//           ))
//         ) : (
//           <h3 style={{textAlign: 'center'}}>You currently have no friends</h3>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Friends;




import React, { useState, useEffect } from 'react';
import classes from './friends.module.css';
import profile from '../../Images/profile11.jpg';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const fetchFriends = async () => {
  //     try {
  //       if (user && user._id) {
  //         const response = await axios.get(`http://localhost:3003/find/userfriends/${user._id}`);
  //         console.log(response.data); 
  //         setFriends(response.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  
  //   fetchFriends();
  // }, [user]);
  

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        if (user && user._id) {
          const friends = await axios.get(`http://localhost:3003/find/userfriends/${user._id}`);
          console.log (friends); 
          setFriends(friends);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchFriends();
  }, [user]);




  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {friends?.length > 0 ? <h3>Your friends</h3> : ''}
        {friends?.length > 0 ? (
          friends.map((friend) => (
            <div key={friend._id} className={classes.friend}>
              <img src={friend?.profilePic ? `http://localhost:3003/public/images/${friend.profilePic}` : profile} className={classes.friendImg} alt="" />
              <span>{friend.username}</span>
            </div>
          ))
        ) : (
          <h3 style={{ textAlign: 'center' }}>You currently have no friends</h3>
        )}
      </div>
    </div>
  );
};

export default Friends;


// import React, { useState, useEffect } from 'react';
// import classes from './friends.module.css';
// import profile from '../../Images/profile11.jpg';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const Friends = () => {
//   const [friends, setFriends] = useState([]);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const fetchFriends = async () => {
//       try {
//         if (user && user._id) {
//           const response = await axios.get(`http://localhost:3003/find/userfriends/${user._id}`);
//           console.log("Response from server:", response.data); // Log the response data to the console
//           setFriends(response.data); // Set the friends state with the data from the response
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     fetchFriends();
//   }, [user]);
//   ;

//   return (
//     <div className={classes.container}>
//       <div className={classes.wrapper}>
//         {friends?.length > 0 ? <h3>Your friends</h3> : ''}
//         {friends?.length > 0 ? (
//           friends.map((friend) => (
//             <div key={friend._id} className={classes.friend}>
//               <img src={friend?.profilePic ? `http://localhost:3003/public/images/${friend.profilePic}` : profile} className={classes.friendImg} alt="" />
//               <span>{friend.username}</span>
//             </div>
//           ))
//         ) : (
//           <h3 style={{ textAlign: 'center' }}>You currently have no friends</h3>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Friends;
