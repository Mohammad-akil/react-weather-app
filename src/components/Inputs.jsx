import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [location, setlocation] = useState({ lat: 0, lon: 0 });

  const handleClick = () => {
    if (city !== " ") {
      setError(false);
      setQuery({ q: city });
      setCity("");
    } else {
      setError(true);
    }
  };

  const handleLocationClick = () => {
    setQuery({ lat: location.lat, lon: location.lon });
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      const location = navigator.geolocation.getCurrentPosition((location) => {
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        setlocation((prev) => {
          return {
            ...prev,
            lat: lat,
            lon: lon,
          };
        });
      });
    } else {
      console.log("location access denied");
    }
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center my-6 ">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search for city"
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          />
          <UilSearch
            onClick={handleClick}
            size={25}
            className="text-white cursor-pointer ease-in-out hover:scale-125"
          />
          <UilLocationPoint
            onClick={handleLocationClick}
            size={25}
            className="text-white cursor-pointer ease-in-out hover:scale-125"
          />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center text-white text-xl gap-2">
          <button
            name="metric"
            className="font-light"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p>|</p>
          <button
            name="imperial"
            className="font-light"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
      {error && <p>something went wrong</p>}
    </>
  );
};

export default Inputs;
