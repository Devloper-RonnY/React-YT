import React, { useState } from "react";
import { X, Check } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTasks = [...tasks]; // spread all previous tasks into new variable
    copyTasks.push({ title, desc }); // push state into that variable
    setTasks(copyTasks); // set this variable into state using state function
    

    setTitle("");
    setDesc("");
  };

  const deleteNotes = (idx) => {
    let copyNotes = [...tasks]
    copyNotes.splice(idx,1);
    setTasks(copyNotes);
  }

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

          <button className="bg-white text-black px-5 py-2 rounded active:scale-95">
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

        {tasks.map((elem, idx) => (
          
          <div key={idx} className="relative h-40 w-40 rounded-xl pl-2 bg-amber-100">
            <h3 className="text-black font-bold text-xl">{elem.title}</h3>
            <h4 className="text-black text-xl">{elem.desc}</h4>
            <button onClick={() => deleteNotes(idx)} 
            className="text-white bg-red-600 mt-15 rounded w-35 active:scale-95" >Delete</button>
          </div>            
        ))}
      </div>
    </div>
  );
};

export default App;
