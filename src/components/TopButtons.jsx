import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  const handleRequest = (title) => {
    if (title) {
      const city = cities.find((item) => item.title === title);
      if (city) {
        setQuery((prev) => {
          return {
            ...prev,
            q: city.title,
          };
        });
      } else {
      }
    } else {
    }
  };
  return (
    <div className="flex items-center justify-around gap-2 my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => handleRequest(city.title)}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
