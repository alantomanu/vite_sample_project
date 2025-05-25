
import useCount from "../hooks/useCount"

export default function Card(){
    const {count,setCount} = useCount()
    return(
    <>
    <h1>Card</h1>
    <p>hi this is a card with count {count}</p>
    <button onClick={()=>setCount(count-1)}>-</button>
    </>)
    
}