
import './App.css';
import users from "../src/data/Users";
import ProfileCard from './components/ProfileCard';
import React from 'react'
export const App = () => {
  //main componet that renders user profile card
  return (
    
    <div className='app-container'>
      {users.map((user)=>(
          <ProfileCard key={user.id} user={user}></ProfileCard>
        ))}
    </div>
    
  )
};


export default App;
