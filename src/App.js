import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempratureDetails from "./components/TempratureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { formatToLocalTime } from "./services/weatherService";
const App = () => {
  const [query, setQuery] = useState({ q: "Baroda" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";

    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          if (data.lat === 0 && data.lon === 0) {
            setError(true);
            setWeather(null);
          } else {
            setError(false);
            setWeather(data);
          }
        }
      );
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div
      className={`mx-auto max-w-xl mt-4 py-5 px-4 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {error && (
        <p className="text-xl text-center text-white">
          City didnt exist in our Database,Try another one
        </p>
      )}
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempratureDetails weather={weather} />
          {/* <Forecast title={"Hourly Forecase"} />
      <Forecast title={"Daily Forecase"} /> */}
        </>
      )}
    </div>
  );
};

export default App;
