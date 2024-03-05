// import React from 'react';
// import classes from './sidebar.module.css';
// import { Link } from 'react-router-dom';
// import { sidebarData } from '../../utils/sidebardata';
// import { useSelector } from "react-redux";
// const Sidebar = () => {

 

//   const { user } = useSelector((state) => state.auth);
//   const [users, setUsers] = useState([]);
  
//   useEffect(() => {
//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('/api/users');
//             setUsers(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     fetchUsers();
// }, []);



//   return (
//     <div className={classes.container}>
//       <div className={classes.container1}>
//         {sidebarData.map((data) => (
//           <div key={data.id} className={classes.item}>
//             {data.icon}
//             <span className={classes.text}>{data.text}</span>
//           </div>
//         ))}
//       </div>

//       <div> {user.map}</div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from 'react';
import classes from './sidebar.module.css';
import axios from 'axios';
import { sidebarData } from '../../utils/sidebardata';
import { useSelector } from "react-redux";
const Sidebar = () => {

 

  const { user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);


   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3003/user/findAll');
        setUsers(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);



  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        {sidebarData.map((data) => (
          <div key={data.id} className={classes.item}>
            {data.icon}
            <span className={classes.text}>{data.text}</span>
          </div>
        ))}


<div>
        <h2>All Users</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
      </div>

      <div>
        <h2>All Users</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;