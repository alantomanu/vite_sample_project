import { createContext, useEffect, useRef, useState } from "react"
import Post from "./components/post";
import Counter from "./components/counter";
import Card from "./components/Card";
import CountProvider from "./providers/CountProviders";
function App() {
  const [ posts, setPosts]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const loadPosts =async ()=>{
    const res= await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data)
    setPosts(data)
    setLoading(false)};
    loadPosts()
  },[]);
  if(loading) return <h1>Loading...</h1>
  return(
    <>
    {/* <div>
    {posts.map((post)=>
      <Post title={post.title} body={post.body} key={post.id}/>
    )}
    </div>  */}
    <div>
   <CountProvider>
    <Counter/>
    <Card/>
   </CountProvider>
    </div>
    </>
  )
}

export default App
