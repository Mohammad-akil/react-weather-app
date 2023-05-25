import React, { useEffect, useState } from "react";

const TimeAndLocation = (weatherdetails) => {
  const {
    weather: { formatedDate, formatedTime, country, name },
  } = weatherdetails;
  return (
    <div>
      <div className="flex flex-col gap-3 text-xl text-white font-extralight items-center justify-center my-6 ">
        <div className="text-white ">
          {formatedDate} | Local time : {formatedTime}
        </div>
        <div className="font-semibold">
          {name}, {country}
        </div>
        {/* <button onClick={getlatlong}>getlocation</button> */}
      </div>
    </div>
  );
};

export default TimeAndLocation;
