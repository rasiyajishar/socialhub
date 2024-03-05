

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import classes from './auth.module.css';

// import { request } from '../../utils/request';
// import { useDispatch } from 'react-redux';
// import { login, register } from '../../redux/authSlice'

// const Auth = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error,setError]=useState(false);
//   const dispatch=useDispatch()
//   const navigate = useNavigate();

  
  

     

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if(isRegister){
//         if(username=== "" || email === "" || password===""){
//           setError("fill all fields")
//           setTimeout(()=>{
//             setError(false)
//           },2500)
//           return
//         }
//         const headers = {
//           'Content-Type':"application/json"
//         }
//         const body = {
//           username,
//           email,password
//         }
//       const data= await request("/auth/register",'POST',headers,body)
// dispatch(register(data))
// console.log(data)
//       navigate("/")
//       }else{
// if(email === "" || password === ''){
//   setError("fill all fields")
//   setTimeout(()=>{
//     setError(false)
//   },2500)
//   return
// }
// const headers ={
//   'Content-Type':"application/json"
//       }
    
//     const body ={
//       email,password
//     }
//     const data = await request ('/auth/login','POST',headers,body)
//     dispatch(login(data))
//     navigate("/")
//   }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div className={classes.container}>
//       <div className={classes.container1}>
//       <div className={classes.left}>
//                 <h3>Socialhub</h3>
//          </div>
//         <form onSubmit={handleSubmit} className={classes.right}>
//           {isRegister && (
//             <input
//               type="text"
//               placeholder="Type your username.."
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Type your email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Type your password......"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className={classes.submitbtn}>
//             {isRegister ? 'Register' : 'Login'}
//           </button>
//           {isRegister ? (
//             <p onClick={() => setIsRegister((prev) => !prev)}>
//               Already have an account? Login
//             </p>
//           ) : (
//             <p onClick={() => setIsRegister((prev) => !prev)}>
//               Don't have an account? Register
//             </p>
//           )}
//         </form>
//         {error && (
//           <div className={classes.error}>{error}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Auth;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import classes from './auth.module.css';
// import axios from 'axios'; // Import Axios

// import { useDispatch } from 'react-redux';
// import { login, register } from '../../redux/authSlice';
// // import { useSelector } from 'react-redux';
// const Auth = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//    //const { token } = useSelector((state) => state.auth);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isRegister) {
//         if (username === '' || email === '' || password === '') {
//           setError('Fill all fields');
//           setTimeout(() => {
//             setError(false);
//           }, 2500);
//           return;
//         }

//         const headers = {
//           'Content-Type': 'application/json',
//         };

//         const body = {
//           username,
//           email,
//           password,
//         };

//         const response = await axios.post('http://localhost:3003/auth/register', body,  headers );
//         const data = response.data;
//         dispatch(register(data));
      
//         navigate('/');
//       } else {
//         if (email === '' || password === '') {
//           setError('Fill all fields');
//           setTimeout(() => {
//             setError(false);
//           }, 2500);
//           return;
//         }

//         const headers = {
//           'Content-Type': 'application/json',
//         };

//         const body = {
//           email,
//           password
//         };

//         const response = await axios.post('http://localhost:3003/auth/login', body,  headers );
//         const data = response.data;
//         dispatch(login(data));
//         //  localStorage.setItem("authToken",token)
//         navigate('/');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   return (
//     <div className={classes.container}>
//       <div className={classes.container1}>
//         <div className={classes.left}>
//           <h3>Socialhub</h3>
//         </div>
//         <form onSubmit={handleSubmit} className={classes.right}>
//           {isRegister && (
//             <input
//               type="text"
//               placeholder="Type your username.."
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Type your email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Type your password......"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className={classes.submitbtn}>
//             {isRegister ? 'Register' : 'Login'}
//           </button>
//           {isRegister ? (
//             <p onClick={() => setIsRegister((prev) => !prev)}>Already have an account? Login</p>
//           ) : (
//             <p onClick={() => setIsRegister((prev) => !prev)}>Don't have an account? Register</p>
//           )}
//         </form>
//         {error && <div className={classes.error}>{error}</div>}
//       </div>
//     </div>
//   );
// };

// export default Auth;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './auth.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, register } from '../../redux/authSlice';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        if (!username || !email || !password) {
          setError('Please fill all fields');
          return;
        }

        const headers = {
          'Content-Type': 'application/json',
        };

        const body = { username, email, password };

        const response = await axios.post('http://localhost:3003/auth/register', body, headers);
        const data = response.data;

        dispatch(register(data));
        navigate('/');
      } else {
        if (!email || !password) {
          setError('Please fill all fields');
          return;
        }

        const headers = {
          'Content-Type': 'application/json',
        };

        const body = { email, password };

        const response = await axios.post('http://localhost:3003/auth/login', body, headers);
        const data = response.data;

        dispatch(login(data));
        navigate('/');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={classes.left}>
          <h3>Socialhub</h3>
        </div>
        <form onSubmit={handleSubmit} className={classes.right}>
          {isRegister && (
            <input
              type="text"
              placeholder="Type your username.."
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Type your password......"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={classes.submitbtn}>
            {isRegister ? 'Register' : 'Login'}
          </button>
          {isRegister ? (
            <p onClick={() => setIsRegister((prev) => !prev)}>Already have an account? Login</p>
          ) : (
            <p onClick={() => setIsRegister((prev) => !prev)}>Don't have an account? Register</p>
          )}
        </form>
        {error && <div className={classes.error}>{error}</div>}
      </div>
    </div>
  );
};

export default Auth;
