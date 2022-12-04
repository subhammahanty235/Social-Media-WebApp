
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
function App() {
  return (
    <>
        <BrowserRouter>
       
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
    </>

  );
}

export default App;
