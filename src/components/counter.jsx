import { useContext, useState } from "react"
import { countContext } from "../App"
export default function Counter(){
    const {count ,setCount} =useContext(countContext)
    return <>
    <button onClick={()=>setCount(count+1)}>Button</button>
    <h1>{count}</h1>
    </>
}

