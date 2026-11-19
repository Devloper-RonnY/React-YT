import React from "react";
import { useParams } from "react-router-dom";

const Courses = () => {
  return (
    <div className="w-full">
      <div className="flex gap-10">
        <button className="bg-blue-950 px-5 py-2 rounded text-sm cursor-pointer active:scale-95">
          return to home page
        </button>
        <button className="bg-blue-950 px-5 py-2 rounded text-sm cursor-pointer active:scale-95">
          back
        </button>
      </div>

      <h1 className="text-center">Courses</h1>
    </div>
  );
};

export default Courses;
