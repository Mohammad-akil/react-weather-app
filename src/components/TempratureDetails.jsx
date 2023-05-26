import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { iconUrlFromCode, formatToLocalTime } from "../services/weatherService";
import { useEffect, useState } from "react";
const TempratureDetails = (weatherDetails) => {
  const {
    weather: {
      details,
      icon,
      sunrise,
      sunset,
      temp,
      feels_like,
      humidity,
      speed,
      temp_max,
      temp_min,
    },
  } = weatherDetails;
  const [data, setData] = useState(null);

  useEffect(() => {
    const [, sunSetTime] = formatToLocalTime(sunset);
    const [, sunRiseTime] = formatToLocalTime(sunrise);

    setData((prev) => {
      return {
        ...prev,
        sunriseTime: sunRiseTime,
        sunSetTime: sunSetTime,
      };
    });
  }, [sunrise, sunset]);

  return (
    <div className="flex flex-col items-center justify-center py-6 text-xl text-cyan-300">
      <p>{details}</p>

      <div className="flex flex-row items-center justify-around text-white py-3 w-full">
        <img src={iconUrlFromCode(icon)} className="w-25 h-25 " alt="logo..." />
        <p className="flex flex-col space-y-2 ">{temp.toFixed()}°</p>
        <div className="flex flex-col  space-y-2">
          <div className="flex font-light text-sm items-center justify-start">
            <UilTemperature size={18} className="mr-1" />
            Real fell :
            <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
          </div>
          <div className="flex font-light text-sm items-center  justify-start">
            <UilTear size={18} className="mr-1" />
            Humidity :<span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center  justify-start">
            <UilWind size={18} className="mr-1" />
            Wind :
            <span className="font-medium ml-1">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise : <span className="font-medium ml-1">{data?.sunriseTime}</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set : <span className="font-medium ml-1">{data?.sunSetTime}</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High : <span className="font-medium ml-1">{temp_max}°</span>
        </p>
        <p className="font-light">|</p>
        <p className="font-light">
          Low : <span className="font-medium ml-1">{temp_min}°</span>
        </p>
      </div>
    </div>
  );
};

export default TempratureDetails;
