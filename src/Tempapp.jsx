import React, { useEffect, useState } from "react";
import "./index.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dccaffd2b4a0d7e72747209557815627`;
      const res = await fetch(url);
      const res_json = await res.json();
      setCity(res_json.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h4 className="location">{search}</h4>
              <h1 className="temp">{city.temp}℃</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}℃ | Max : {city.temp_max}℃
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
