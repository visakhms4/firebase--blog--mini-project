import React,{useState,useEffect} from 'react'
import {addDoc,collection} from 'firebase/firestore'
import { async } from '@firebase/util';
import { db,auth } from '../firebase';
import {useNavigate} from  'react-router-dom'

const CreatePost = (isAuth) => {
  const navigate = useNavigate()
  const [title,setTitle] = useState("");
  const [postText,setPostText] = useState("");
  const postCollectionRef = collection(db,"post")
  const createPost = async ()=>{
     await addDoc(postCollectionRef,{title,postText,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}});
    navigate("/")
  }
  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
  },[])
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a post</h1>
        <div className='inputGp'>
          <label >Title:</label>
          <input placeholder='Title..' type="text" onChange={(e)=>{setTitle(e.target.value)}} />
        </div>
        <div className='inputGp'>
          <label >Post:</label>
          <textarea  placeholder='post..' onChange={(e)=>{setPostText(e.target.value)}}></textarea>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost