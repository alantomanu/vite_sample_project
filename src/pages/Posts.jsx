import { useState } from "react";


export default function Posts(){
    const [posts,setPosts]=useState([])
    
    const  loadPosts=async()=>{
      const res=await fetch('https://jsonplaceholder.typicode.com/posts')
      const data=await res.json()
      setPosts(data)


    }
    
    
    return(
        <>
        <h1>This is post pages</h1>
        <button onClick={()=>{loadPosts()}}>Load</button>
        {posts.map((post)=>(
            <>
            <h1 key={post.id}>{post.title}</h1>
            <p>{post.body}</p>
            </>
        ))}
        </>
    
)}