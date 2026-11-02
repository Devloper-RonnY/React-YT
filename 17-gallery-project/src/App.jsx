import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData()
  })

  let printData = <h3 className="text-gray-600 font-bold absolute top-1/2 left-1/2 text-lg -translate-x-1/2 -translate-y-1/2">loading...</h3>

  if (userData.length > 0) {
    printData = userData.map((ele, idx) => {
      return (
        <Card key={idx} ele={ele}/>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="px-5 h-[82%] py-2 flex justify-center flex-wrap gap-4 ">
        {printData}
      </div>

      <div className="flex justify-center gap-3 mt-30 ">
        <button 
        style={{opacity: index===1?0.5:1,}}
         onClick={() => {
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        className="bg-amber-400 px-2 py-2 cursor-pointer active:scale-95 text-black font-bold rounded">Prev</button>
        <h1 className="text-xl font-bold rounded text-white p-2">Page no {index}</h1>
        <button onClick={() => {
          setIndex(index+1) 
          setUserData([])
         } }
          className="bg-amber-400 px-2 py-2 cursor-pointer active:scale-95 text-black font-bold rounded">Next</button>
      </div>
    </div>
  );
};

export default App;
