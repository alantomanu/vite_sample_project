import { useState } from "react"
import countContext from "../contexts/CountContext"
export default function CountProvider({children}){
const [count,setCount]=useState(0)
  return <countContext.Provider value={{count,setCount}}>
{children}
  </countContext.Provider> 
}