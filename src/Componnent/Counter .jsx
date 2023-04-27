import "./Counter.css"
import { React ,useState } from "react"
export default function Counter () {
  let  [count , setCount]=useState(0)

  function increase(){
    setCount(++count)
  }

  
  function decrease (){
    if(count==0){
        setCount(0)
    }else {
        setCount(--count)
    }
    
  }
  
    return(
<>
<h1 style={{color:"teal"}}  >COUNTER APP</h1>

<h1>{count}</h1>
<button onClick={increase } >Increase </button>
<button onClick={decrease } >Decrease </button>
</>
    )
}