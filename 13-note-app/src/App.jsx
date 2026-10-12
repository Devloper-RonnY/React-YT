import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  // console.log(title, desc);
  

  // const handleInput = (e) => {
  //   setTitle(e) 
  // }
  // const handleDesc = (e) => {
  //   setDesc(e) 
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc);


    setTitle("")
    setDesc("")
  };
  
  return (
    <div className="flex flex-col justify-center p-60 h-screen bg-black text-white">
      <form className="flex" onSubmit={submitHandler}>
        <div className="flex flex-col justify-center ite gap-5">
          <h1 className=" text-xl font-bold">Add Notes</h1>
          <input
            className="text-white border-2 font-medium px-5 w-150 py-2 rounded outline-none"
            type="text"
            placeholder="Enter Notes here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="text-white border-2 font-medium h-32 px-5 py-2 rounded outline-none"
            type="text"
            value={desc}
            placeholder="Enter details here"
            onChange={(e) => setDesc(e.target.value)}
          />

          <button className="bg-white text-black px-5 py-2 rounded">
            Add Notes
          </button>
        </div>
        <img
          className="h-62 rotate-y-180"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt="writing"
        />
      </form>

      <h1 className="pt-2 text-xl font-bold">Recent Notes</h1>
      <div className="flex flex-wrap m-5 gap-5">
        <div className="h-45 w-45 bg-white rounded-2xl">
            
        </div>
        <div className="h-45 w-45 bg-white rounded-2xl"></div>
        <div className="h-45 w-45 bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};

export default App;
