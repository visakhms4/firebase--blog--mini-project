import React,{useState,useEffect} from 'react'
import {getDocs,collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { async } from '@firebase/util'

function Home() {
  const [post,setPost] = useState([])
  const postCollectionRef = collection(db,"post")
  useEffect(()=>{
    const getPost = async()=>{
      const data = await getDocs(postCollectionRef);
      setPost(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      
    }
    getPost()
  })
  const deletePost =async (id)=>{
    const postDoc = doc(db,"post",id)
      await deleteDoc(postDoc)
  }
  return (
    <div className='homePage'>
      {
        post.map((post)=>{
          return (
          <div className='post'>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
              <div className='deletePost'>
                
                <button onClick={()=>{deletePost(post.id)}}>&#128465;</button>
              </div>

            </div>
            <div className='postTextContainer'>{post.postText}</div>
           <h3>@{post.author.name}</h3> 
             </div>)
        })
      }
    </div>
  )
}

export default Home