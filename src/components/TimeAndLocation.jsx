import React, { useEffect, useState } from "react";
const APIKEY = "94e1ea6b881470873de27002eed93f9a";
const TimeAndLocation = () => {
  const [location, setlocation] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setlocation([latitude, longitude]);
      });
    } else {
      console.log("navgation not available");
    }
  }, []);

  const getlatlong = async () => {
    const [lat, lon] = location;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
    );
    const data = await res.json();
  };

  return (
    <div>
      <div className="flex flex-col gap-3 text-xl text-white font-extralight items-center justify-center my-6 ">
        <div className="text-white ">
          Tuesday, 31 May 2022 | Local time : 12:45 PM
        </div>
        <div className="font-semibold">Berlin, DE</div>
        {/* <button onClick={getlatlong}>getlocation</button> */}
      </div>
    </div>
  );
};

export default TimeAndLocation;
