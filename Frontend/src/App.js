
import './App.css';
import Login from './pages/authentication/login/Login';
import Signup from './pages/authentication/signup/Signup';
import Home from './pages/mainapp/home/Home';
import Navbar from './pages/mainapp/navbar/Navbar';
import {
  BrowserRouter,Routes,
  Route,
  
  // Link
} from "react-router-dom";
import { useEffect } from 'react';
import Uploadimg from './pages/mainapp/home/feed/newpost/Uploadimg';
import Profile from './pages/mainapp/home/Profiles/Profile';

function App() {
  // const navigate = useNavigate()
  
  return (
    <>
        <BrowserRouter>
       
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/myposts'/>
            
          </Routes>
        </BrowserRouter>
         {/* <Uploadimg/>
         <Profile/> */}
    </>

  );
}

export default App;
