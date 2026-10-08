import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState(" ")
  console.log(title);
  
  return (
    <div>
      <form>
        <input 
        type="text" 
        placeholder='enter name here' 
        value={title}
        onChange={(e) => setTitle(e.target.value)
        }
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App