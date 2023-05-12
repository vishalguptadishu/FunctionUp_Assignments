import React from "react";
import Squar from "./Squar";

import { useState } from "react";

 let Board =()=>{
    let [Arr,setArr]=useState(Array(9).fill(null));
    let [IsXTurn ,setIsXTurn]=useState(true)


    let checkWinner =() =>{
      const winnerLogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ];
      for(var logic of winnerLogic){
        const [a,b,c]=logic;
        if(Arr[a] !== null && Arr[a]===Arr[b] && Arr[a]===Arr[c]){
          return Arr[a];
        }
      }
      return false;
    }
let ans=checkWinner()
    

    const handleClick= (i)=>{
        let copyArr=[...Arr];
        copyArr[i]=IsXTurn ? "X" :"O";
        
        setArr(copyArr)
        setIsXTurn(!IsXTurn)
        // console.log(Arr[1])
    }
    
    return (
      <>
      <h1>Tic Tac Toe</h1>
    <div className="container">
            
      <div className="board-row">
        <Squar ev={()=> handleClick(0)} value={Arr[0]} />
        <Squar ev={()=> handleClick(1)} value={Arr[1]}  />
        <Squar ev={()=> handleClick(2)} value={Arr[2]}  />
      </div>
      <div className="board-row">
        <Squar ev={()=> handleClick(3)} value={Arr[3]} />
        <Squar ev={()=> handleClick(4)} value={Arr[4]}  />
        <Squar ev={()=> handleClick(5)} value={Arr[5]}  />
      </div>
      <div className="board-row">
        <Squar ev={()=> handleClick(6)} value={Arr[6]} />
        <Squar ev={()=> handleClick(7)} value={Arr[7]}  />
        <Squar ev={()=> handleClick(8)} value={Arr[8]}  />
      </div>
        
    </div>
    <h1> Winner is = {ans} </h1>
    <button onClick={()=>setArr(Array(9).fill(null)) } > Start</button>
    </>
    )
}
export default Board