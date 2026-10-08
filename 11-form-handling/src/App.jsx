import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    
  }

  return (
    <div>
       <form > 
        <input type="text" placeholder='enter name here' />
        <button onClick={submitHandler}>Submit</button>
       </form>
    </div>
  )
}

export default App