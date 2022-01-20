import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import {Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import { NavLink } from 'react-router-dom';
import Protectedroute from './ProtectedRoute';
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/login"element={<Login/>} auth={false}/>
      <Route path="/register"element={<Register/>} auth={false}/>
      <Route path="/logout"element={<Logout/>} auth={false}/>
      </Routes>
    </>
  );
}

export default App;
