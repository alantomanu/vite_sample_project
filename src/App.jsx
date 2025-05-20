import { useState } from "react"

function App() {
  const data={
    "kerala":"trivandrum",
    "karnataka":"bengaluru",
    "TN":"chenai"
  }
const [selectedState, setSelectedState]=useState("")
const changeState=(e)=>{
console.log(e.target.value)
setSelectedState(e.target.value);
}
  return (
    <>
    <div>
      <select onChange={changeState}>
        <option value="kerala">Kerala</option>
        <option value="karnataka">karnataka</option>
        <option value="TN">TN</option>
      </select>
      <p>Selected State is:{selectedState}</p>
    </div>
    </>
    

    
  )
}

export default App
