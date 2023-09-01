import React, { useContext } from "react";
import SearchD from "./SearchDropdown.jsx";

import { Context } from "../../../context/Context.js";
import env from "react-dotenv";

const Search = () => {
  const { search, setSearch, city, setCity, weather, setWeather } =
    useContext(Context);

  const handleChange = async (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 1) setCity("");
    if (e.target.value.length < 4) {
      return;
    }
    //fetch the cities available
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=0cd40f3197f94ea2ad6165103233008&q=${search}`
    );
    const data = await response.json();

    setCity(data);

    //update city state setCity
  };

  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0cd40f3197f94ea2ad6165103233008&q=${search}`
      );

      const data = await response.json();
      //limit and api key check
      if (response.status === 401 || response.status === 403)
        throw new Error("API key invalid || Limit Reached");
      //handling invalid entry
      if (data.error) throw data.error;
      setWeather(data);
      setSearch("");
      setCity([]);
    } catch (error) {
      if (error.code === 1006) alert("City could not be found");
      if (error.message) alert(error.message);
    }
  };

  return (
    <>
      <h2 className="text-center text-2xl pt-2">Enter the city name</h2>
      <div className="flex">
        <div className="w-3/4 mx-auto  ring-1 ring-inset ring-green-900 p-1 rounded mt-6">
          <div className="flex  ">
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
              className="block w-full rounded-md  py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400  focus:outline-none sm:text-sm sm:leading-6"
              placeholder="0.00"
            />
            <button
              type="submit"
              onClick={getWeather}
              className=" text-white   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              search
            </button>
          </div>
          <div>
            {city.length > 0 &&
              city.map((item, index) => {
                return <SearchD city={item} key={index} gw={getWeather} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
