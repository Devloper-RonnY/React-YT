import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18 uppercase">
      <h4 className="bg-black text-white px-5 py-3 rounded-full text-xs">
        Target Audience
      </h4>
      <button className="uppercase bg-gray-200 px-3 py-2 rounded-full tracking-widest text-xs">Digital Banking Platform</button>
    </div>
  );
};

export default Navbar;
