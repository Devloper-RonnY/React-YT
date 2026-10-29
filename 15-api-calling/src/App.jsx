import React, { useState } from 'react'

const App = () => {
  const [users, setusers] = useState([]);

  const getUserData = async () => {
    const response = await fetch('https://dummyjson.com/users')
    let data = await response.json();
    setusers(data.users)
  }

  return (
    <>
      <button onClick={getUserData}>get User</button>
      {
        users.map((data, idx) => (
          <h1 style={{padding:"20px", margin: "30px"}} key={idx}>{data.firstName}</h1>
        ))
      }
    </>
  )
}

export default App