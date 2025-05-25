
import useCount from "../hooks/useCount"
export default function Counter(){
    const {count ,setCount} =useCount()
    return <>
    <button onClick={()=>setCount(count+1)}>Button</button>
    <h1>{count}</h1>
    </>
}

