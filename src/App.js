import './App.css';
import {React, useRef } from "react";
function App() {

  let rrr=useRef(null)

  function hendalbtn(){
  
    rrr.current.click()
   
  }

  return (
    <div className="App">

    <input ref={rrr}  type='file' />
    <button onClick={hendalbtn} >picke the file</button>

    </div>
  );
}

export default App;
