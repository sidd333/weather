import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const WeatherDas = () => {
  const { weather } = useContext(Context);
  return (
    <div className="flex flex-col bg-white rounded pl-24 w-full max-w-xs">
      <div className="font-bold text-xl">
        {!weather ? <>Location</> : weather.location.name},&nbsp;
        {!weather ? <>...</> : weather.location.country}
      </div>
      <div className="text-sm text-gray-500">
        {!weather ? <>1-1-1</> : weather.location.localtime}
      </div>
      <div className="mt-2 mx-auto text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-52 w-24">
        <img
          src={`https:${!weather ? <>...</> : weather.current.condition.icon}`}
          alt="not loaded"
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-6xl">
          {!weather ? <>...</> : weather.current.temp_c}°
        </div>
        <div className="flex flex-col items-center ml-6">
          <div>{!weather ? <>...</> : weather.current.condition.text}</div>
          <div className="mt-1">
            <span className="text-sm">
              <i className="far fa-long-arrow-up"></i>
            </span>
            <span className="text-sm font-light text-gray-500">
              2{!weather ? <>...</> : weather.current.temp_f}°F
            </span>
          </div>
          <div>
            <span className="text-sm">
              <i className="far fa-long-arrow-down"></i>
            </span>
            <span className="text-sm font-light text-gray-500">
              Feels like {!weather ? <>...</> : weather.current.feelslike_c}
              °C,&nbsp;{!weather ? <>...</> : weather.current.feelslike_f}°F
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-6">
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Wind</div>
          <div className="text-sm text-gray-500">
            {!weather ? <>...</> : weather.current.wind_kph}kph
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Humidity</div>
          <div className="text-sm text-gray-500">
            {!weather ? <>...</> : weather.current.humidity}%
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-sm">Visibility</div>
          <div className="text-sm text-gray-500">
            {!weather ? <>...</> : weather.current.vis_km}km
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDas;
