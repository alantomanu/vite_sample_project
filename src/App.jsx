import { useEffect, useRef, useState } from "react"

function App() {
  const [ datas, setData]=useState([])
  const loadPosts =async ()=>{
    const res= await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data)
    setData(data)
  }
  return(
    <>
    <div>
    <button onClick={loadPosts}>Load</button>
    {datas.map((post)=>{return <h1>{post.title}</h1>})}
    </div>
    </>
  )
}

export default App
