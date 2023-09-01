import React, { useEffect } from "react";

import env from "react-dotenv";
import Search from "./components/search/Search.jsx";
import WeatherDas from "./components/weatherDisplay/WeatherDas.jsx";
import Globe from "./components/weatherDisplay/Globe.jsx";
const Main = () => {
  return (
    <div className="h-screen">
      <Search />
      <div className=" flex h-full pt-24">
        <WeatherDas />
        <Globe />
      </div>
    </div>
  );
};

export default Main;
