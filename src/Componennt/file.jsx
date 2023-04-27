import {useState} from "react"
export default function GuessLucky(){

    let [userinput,setuserinput]=useState("");
    let [Attampt ,setAttampt]=useState(0);
    let [random, setrandom]=useState(Math.floor(Math.random()*10));
    console.log(random)

    function userinputhandel(e){
        setuserinput(e.target.value)
    }

    function handalclick(){
        setAttampt(++Attampt)

     if(userinput<random){
        alert("you guessed a smaller number " )
     }else if(userinput>random){
        alert("you guessed a bigger number  " )
     }else  if(userinput==random){
        alert(`congratulations you guessed the right number in ${Attampt} attempts ` )
     }
     setuserinput("")
    }
    return(
        <>
        <h1> Guess Lucky Number Game</h1>
        <input placeholder="Guess Lucky Number..." value={userinput} type="text" onChange={userinputhandel} />
        <button  onClick={handalclick} > Submit</button>
        
        </>
    )
}
