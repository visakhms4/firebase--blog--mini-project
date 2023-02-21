import React from 'react'
import {auth,provider} from '../firebase';
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from 'react-router-dom'

function Login({setIsAuth}) {
  let navigate = useNavigate()
  const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true)
      navigate("/")
    })

  }
  return (
    <div className='loginPage'>
      <p>SignIn with Google</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign IN</button>
    </div>
  )
}

export default Login