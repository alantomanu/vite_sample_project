import { useEffect, useRef, useState } from "react"

function App() {
  const [fact , setFact]= useState("")
  const numberRef =useRef()
  const  getFact=async()=>{
  const response= await fetch(`http://numbersapi.com/${numberRef.current.value}`)
  const text =await response.text()
  setFact(text)
  }
  return(<>
  <input ref={numberRef} type='number' placeholder="Enter number"></input>
  <button onClick={getFact}>Get Fact</button>
  <p>{fact}</p>
  </>)
}

export default App
