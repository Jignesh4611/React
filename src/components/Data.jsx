import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const responce = await axios.get("https://picsum.photos/v2/list");
    setData(responce.data);
    const data = responce.data;
    console.log(data);
  };
useEffect(()=>{
    getData();
})

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="bg-teal-700 text-white font-semibold text-2xl px-6 py-5 rounded active:scale-90"
      >
        Get Data
      </button>

      <div className="p-5 p-6 mt-5 bg-gray-950">
        {data.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-gray-50 flex items-center justify-between w-full px-7 py-6 rounded m-5"
            >
              <img className="h-80" src={elem.download_url} alt="" />
              <h1 className="text-black">{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
