const API_KEY = "94e1ea6b881470873de27002eed93f9a";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.warn(err);
  }
};

function formatTime(militaryTime) {
  const [hours, minutes] = militaryTime.split(":");

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return formattedTime;
}

function formatedDay(day) {
  const days = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wen: "Wenesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
  };
  return days[day];
}

function getMonthName(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
}

export const formatToLocalTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = hours + ":" + minutes;

  const days = date.toDateString().split(" ")[0];

  const formatedDate = `${formatedDay(days)}, ${day} ${getMonthName(
    month
  )} ${year}`;
  const formatedTime = formatTime(currentTime);
  return [formatedDate, formatedTime];
};

const formatCurrentWeather = (data) => {
  if (data.cod !== "404") {
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];
    const [formatedDate, formatedTime] = formatToLocalTime(dt);

    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      name,
      dt,
      country,
      sunrise,
      sunset,
      details,
      icon,
      speed,
      formatedDate,
      formatedTime,
    };
  } else {
    return {
      lat: 0,
      lon: 0,
      temp: 12,
      feels_like: 123,
      temp_min: 0,
      temp_max: 100,
      humidity: 50,
      name: "sample",
      dt: Date.now,
      country: "IN",
      sunrise: "645",
      sunset: 345,
      details: "df",
      icon: "0er",
      speed: 123,
      formatedDate: "e2ewe",
      formatedTime: "13",
    };
  }
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
