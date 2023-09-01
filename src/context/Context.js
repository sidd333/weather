import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const def = {
    location: {
      name: "Hyderabad",
      region: "Andhra Pradesh",
      country: "India",
      lat: 17.38,
      lon: 78.47,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1693547832,
      localtime: "2023-09-01 11:27",
    },
    current: {
      last_updated_epoch: 1693547100,
      last_updated: "2023-09-01 11:15",
      temp_c: 32,
      temp_f: 89.6,
      is_day: 1,
      condition: '{code: 1003, icon: "//cdn.weatherapi.com/weather/64…}',
      wind_mph: 5.6,
      wind_kph: 9,
      wind_degree: 340,
      wind_dir: "NNW",
      pressure_mb: 1012,
      pressure_in: 29.88,
      precip_mm: 1.2,
      precip_in: 0.05,
      humidity: 49,
      cloud: 50,
      feelslike_c: 34.6,
      feelslike_f: 94.2,
      vis_km: 6,
      vis_miles: 3,
      uv: 7,
      gust_mph: 5.4,
      gust_kph: 8.6,
    },
  };
  const [search, setSearch] = useState("");
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState(def);

  return (
    <Context.Provider
      value={{ search, setSearch, city, setCity, weather, setWeather }}
    >
      {children}
    </Context.Provider>
  );
};
