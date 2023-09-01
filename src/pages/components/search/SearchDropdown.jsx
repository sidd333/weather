import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const SearchD = (props) => {
  const { city, setSearch } = useContext(Context);
  return (
    <div
      className="ml-6 bg-slate-100 rounded p-1 hover:bg-slate-300"
      onClick={() => {
        setSearch(props.city.name);
        const w = props.gw();
      }}
    >
      {props.city.name},&nbsp;{props.city.country}
    </div>
  );
};

export default SearchD;
