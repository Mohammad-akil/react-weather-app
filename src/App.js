import React from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempratureDetails from "./components/TempratureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
const App = () => {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "Baroda" });
    console.log(data);
  };
  fetchWeather();
  return (
    <div className="mx-auto max-w-xl mt-4 py-5 px-4   bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempratureDetails />
      <Forecast title={"Hourly Forecase"} />
      <Forecast title={"Daily Forecase"} />
    </div>
  );
};

export default App;
