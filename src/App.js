import './App.css';
import {React, useState } from 'react';

function UserCard ({user}){
  return (
    <div className="user_card1">
       <img src={user.avatar} alt={"user_pic"} />
       <p>{user.first_name} {user.last_name}</p>
       <p>{user.email}</p>
    </div>
  )
}

export default function App() {
  const [users, setUsers] = useState([]);

// -------------------------------------------------------------------------------------

  const getUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users/');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('same error', error);
    }
// -------------------------------------------------------------------------------------

  };

  return (
    <div>
      <button className='btn' onClick={getUsers}>Get Users</button>
      <div id="Cart">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};


