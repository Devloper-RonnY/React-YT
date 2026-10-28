import React from 'react'

const App = () => {

  // const userData = {
  //   name: "Roshan",
  //   age: "24",
  //   email: "Roshan@test.com"
  // }

  // localStorage.setItem("user", JSON.stringify(userData))

  let user = JSON.parse(localStorage.getItem("user"))
  console.log(user.name, user.age, user.email);
  
 
  return (
    <div>App</div>
  )
}

export default App