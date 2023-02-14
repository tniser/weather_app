import React from "react";
import { useState, useEffect } from "react";
import axios from "../apis/weatherAPI";
import useAxios from "../hooks/useAxios";

function SelectCity({ setIsSelectCity, city, setCity, setMenuOpened, isDay }) {
  const API_KEY = "abe1ff2d32524db68a680739231002";

  const [textValue, setTextValue] = useState("");
  const [data, fetchErr, isLoading, axiosFetch] = useAxios();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: `search.json?key=${API_KEY}&q=${textValue.toLowerCase()}`,
    });
  };

  useEffect(() => {
    if (textValue !== "") {
      getData();
    }
    // eslint-disable-next-line
  }, [textValue]);

  const handlePickCity = (url) => {
    setCity(url);
    localStorage.setItem("City", url);
    setIsSelectCity(false);
    setMenuOpened(false);
  };

  return (
    <form className="cityInput" onSubmit={(e) => e.preventDefault()}>
      <input
        className={isDay === 1 ? "textInput" : "textInput night"}
        id="searchCity"
        autoComplete="off"
        autoFocus
        type="text"
        role="searchbox"
        placeholder="Input City"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      ></input>
      <div
        className={isDay === 1 ? "searchBox" : "searchBox night"}
        id={!data[0] || isLoading ? "" : "triggered"}
      >
        <ul className="searchBox__list">
          {(!fetchErr || fetchErr === "canceled") &&
            !isLoading &&
            data.slice(0, 3).map((item) => (
              <li
                className={
                  isDay === 1 ? "searchBox__item" : "searchBox__item night"
                }
                key={item.id}
                onClick={() => handlePickCity(item.url)}
              >
                <p className="searchBox__name">{item.name}</p>
                <div
                  className={
                    isDay === 1 ? "searchBox__add" : "searchBox__add night"
                  }
                >
                  <p className="searchBox__region">{item.region}, </p>
                  <p className="searchBox__country">{item.country}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </form>
  );
}

export default SelectCity;
