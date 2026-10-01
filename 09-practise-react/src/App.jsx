import React from 'react'

const App = () => {

  const onScrolling = (e) => {
    if(e.deltaY > 0) {
      console.log("Siddha Scrolling");
    } else {
      console.log("Ulta Scrolling");
    }
    
  }

  return (
    <div onWheel={onScrolling}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App