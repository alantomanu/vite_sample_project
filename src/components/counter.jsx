import { useState } from "react"

export default function Counter({count,setCount}){
    
    return <>
    <button onClick={()=>setCount(count+1)}>Button</button>
    <h1>{count}</h1>
    </>
}

