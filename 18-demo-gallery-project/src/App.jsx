import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { lazy, Suspense } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`,
    );
    let data = await response.data;
    setUserData(data);
  };

  useEffect(() => {
    getData();
  });

  let printData = <h1 className="text-gray-500">loading...</h1>;
  {
    if (userData.length > 0) {
      printData = userData.map((ele, idx) => {
        return <Card ele={ele} />;
      });
    }
  }

  return (
    <div className="bg-black flex flex-col pt-10 overflow-auto h-screen text-white">
      <div className="px-5 h-[82%] py-2 flex justify-center flex-wrap gap-4 ">
        {printData}
      </div>

      <div className="flex justify-center mt-35 pb-10 gap-5">
        <button
          style={{opacity:index===1?0.5:1}}
          onClick={() => {
            if(index>1)
            setIndex(index - 1);
          }}
          className="bg-amber-500 px-2 py-2 rounded font-bold text-black active:scale-95"
        >
          Prev
        </button>
        <h2 className="text-center mt-2 font-bold">Page No {index}</h2>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="bg-amber-500 px-2 py-2 rounded font-bold text-black active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
