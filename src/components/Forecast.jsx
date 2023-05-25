import React from "react";

const Forecast = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6 ">
        <p className="text-white font-medium capitalize">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">01:30 PM</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png"
            className="w-10 h-10"
            alt="sun-png"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">01:30 PM</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png"
            className="w-10 h-10"
            alt="sun-png"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">01:30 PM</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png"
            className="w-10 h-10"
            alt="sun-png"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">01:30 PM</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png"
            className="w-10 h-10"
            alt="sun-png"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">01:30 PM</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png"
            className="w-10 h-10"
            alt="sun-png"
          />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">01:30 PM</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png"
            className="w-10 h-10"
            alt="sun-png"
          />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
