import {React , useState} from "react";
export default function Updater(){
    let [name , setname]=useState("")
    let [added_name ,setadded_name ]=useState("");

    function handleChange(event){
        setname(event.target.value)
    }
    function added(event){
        event.preventDefault()
        setadded_name(name)
        setname("")
    }
    return (
        <>
        <input 
        style={{marginTop:"50px"}} 
        onChange={handleChange}
        placeholder="Add Your Name..."
        value={name} />
        <button onClick={added} >Submit</button>
        <h2>Hi My Name Is : <span style={{color: "green"}} > {added_name}</span> </h2> 
        </>
    )
}