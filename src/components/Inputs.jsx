import React, { useState } from "react";

import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
const APIKEY = "94e1ea6b881470873de27002eed93f9a";
const Inputs = () => {
  const [city, setData] = useState("Baroda");
  const [data, setresponse] = useState([]);
  const handleClick = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      );
      const data = await res.json();
      console.log(data);
      setresponse(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          onChange={(e) => setData(e.target.value)}
          placeholder="Search for city"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={handleClick}
          size={25}
          className="text-white cursor-pointer ease-in-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer ease-in-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center text-white text-xl gap-2">
        <button name="metric" className="font-light">
          °C
        </button>
        <p>|</p>
        <button name="imperial" className="font-light">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
