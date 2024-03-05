
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
import ProfileDetails from './pages/profileDetails/ProfileDetails';
import Auth from './pages/auth/Auth';








function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile/:id' element={<ProfileDetails />} />
<Route path='/updateprofile/:id' element={<UpdateProfile />} />

<Route path='/auth' element={<Auth />} />
      </Routes>
      
    </div>



//     <div>
//       <Routes>
//       <Route path='/' element={<Auth />} />
// <Route path='/home' element={<Home />} />
// <Route path='/updateprofile' element={<Updateprofile />} />
// <Route path='/profiledetails' element={<ProfileDetails />} />

//       </Routes>
      
//     </div>
  );
}

export default App;
