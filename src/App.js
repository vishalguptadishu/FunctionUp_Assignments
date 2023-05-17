import * as React from 'react';
import './App.css';
import {useState} from 'react'

export default function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value)
  }

  const Additems = () => {
       setItems((bucketItems) => {
         return (
           [...bucketItems, inputList]
         )
       });
       setInputList("");
  };

  
  const handleDeleteUser = (index) => {
    setItems((prevList) => {
      const updatedUserList = [...prevList];
      updatedUserList.splice(index, 1);
      return updatedUserList;
    });
  };



  return (
    <div className="App">
      <h1>Users</h1> 
     <input
      type="text"
      placeholder="add new user"
      value={inputList}
      onChange={itemEvents}
       />
     <button className="btn-1" onClick={Additems}>Add</button>
     <ul>
       {
         items.map((listvalue, index) => {
           return (
             <div>
             <li
              key={index}
              >
               {listvalue } 

     <button className="btn-2" 
     onClick={() => handleDeleteUser(index)}>Delete</button>
                
                </li>
            
             </div>
           )
         })
       }
     </ul>
    </div>
  );
}
