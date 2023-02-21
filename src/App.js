
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import {useState} from "react"
import {signOut} from 'firebase/auth'
import { auth } from './firebase';
function App() {
const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))


const signOutUSer = ()=>{
signOut(auth).then(()=>{
  localStorage.clear();
  setIsAuth(false);
  window.location.pathname ="/"
})
}
  return (
   
    <Router >
      <nav >
        <Link to={"/"}>Home</Link>
        
       {!isAuth ? (<Link to={"/login"}>Login</Link> ) :
      
       ( 
        <>
        <Link to={"/createpost"}>Create Post</Link>
        <button  onClick={signOutUSer}>Logout</button>
        </>
        )
        } 
      </nav>
      <Routes >
        <Route path='/' element = {<Home isAuth={isAuth} />}></Route>
        
        <Route path='/login' element = {<Login setIsAuth = {setIsAuth} />}></Route>
        <Route path='/createpost' element = {<CreatePost  isAuth={isAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
