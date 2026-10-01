import React, { useState } from 'react'

const App = () => {

  const [user, setuser] = useState({name: "Roshan", age: "24"});

  const changeUser = () => {
    setuser(prev => ({...prev, name: "Bhavesh", age: "23"}))
  }

  return (
    <div>
      <h1>My name is {user.name} and age is {user.age}</h1>
      <button onClick={changeUser}>Change name and age</button>
    </div>
  )
}

export default App