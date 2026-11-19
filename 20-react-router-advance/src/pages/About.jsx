import React from "react";
import {useNavigate} from "react-router-dom"

const About = () => {
  let navigate = useNavigate()

  return (
    <div className="w-full">
      <div className="flex gap-10 pt-2">
        <button
        onClick={() => {
          navigate('/')
          console.log("btn pressed");
          
        }}
         className="bg-blue-950 px-5 py-2 rounded text-sm cursor-pointer active:scale-95">
          return to home page
        </button>
        <button
        onClick={() => {
          navigate(-1)
          console.log("btn pressed");
        }}
         className="bg-blue-950 px-5 py-2 rounded text-sm cursor-pointer active:scale-95">
          back
        </button>
      </div>
      <h1 className="text-center">About Us</h1>
    </div>
  );
};

export default About;
