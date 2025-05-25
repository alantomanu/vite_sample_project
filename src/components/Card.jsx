import { useContext } from "react"
import { countContext } from "../App"

export default function Card(){
    const {count,setCount} = useContext(countContext)
    return(
    <>
    <h1>Card</h1>
    <p>hi this is a card with count {count}</p>
    <button onClick={()=>setCount(count-1)}>-</button>
    </>)
    
}