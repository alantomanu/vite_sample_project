
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details(){
    const [datas,setData]= useState({})
    const {id}=useParams()
    const fetchPosts= async () =>{
        const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data=await res.json()
        setData(data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    if(!datas.title){
        return <div>loading...</div>
    }
    return(
        <>
    <h1>{datas.title}</h1>
    <p>{datas.body}</p>
    <Link to="posts">Posts</Link>

    </>

)};