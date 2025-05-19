import { useState } from "react"


function Blog({title,content}){
  return(
    <><h1>{title}</h1>
    <p>{content}</p></>
    
  )

}
function App() {
  const blogs=[
    {title:"blog1",content:"blog1 content1"},
    {title:"blog2",content:"blog1 content2"},
    {title:"blog3",content:"blog1 content3"},
    {title:"blog4",content:"blog1 content4"},
    {title:"blog5",content:"blog1 content5"},
  ]
  
const [count, StateCount]=useState(0)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>StateCount(count + 1)}>+</button>
    <div className="text-center text-4xl text-red-900">hello</div>
    <div>
      <h1>Blogs</h1>
      <hr/>
      {blogs.map(blog=><Blog title={blog.title} content={blog.content}/>)}
    </div>
    </>
    

    
  )
}

export default App
