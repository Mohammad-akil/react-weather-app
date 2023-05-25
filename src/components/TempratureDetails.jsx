import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const TempratureDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-xl text-cyan-300">
      <p>Cloudy or whatever</p>

      <div className="flex flex-row items-center justify-around text-white py-3 w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png"
          className="w-20 h-20"
          alt="sun-png"
        />
        <p className="flex flex-col space-y-2 ">34°</p>
        <div className="flex flex-col  space-y-2">
          <div className="flex font-light text-sm items-center justify-start">
            <UilTemperature size={18} className="mr-1" />
            Real fell :<span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center  justify-start">
            <UilTear size={18} className="mr-1" />
            Humidity :<span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-sm items-center  justify-start">
            <UilWind size={18} className="mr-1" />
            Wind :<span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise : <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set : <span className="font-medium ml-1">07:45 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High : <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>
        <p className="font-light">
          Low : <span className="font-medium ml-1">40°</span>
        </p>
      </div>
    </div>
  );
};

export default TempratureDetails;
