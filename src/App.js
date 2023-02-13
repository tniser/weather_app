import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "./apis/weatherAPI";
import useAxios from "./hooks/useAxios";
//https://api.weatherapi.com/v1/current.json?key=abe1ff2d32524db68a680739231002&q=moscow&aqi=no
function App() {
  if (!localStorage.getItem("City")) {
    localStorage.setItem("City", "Moscow");
  }

  const API_KEY = "abe1ff2d32524db68a680739231002";
  const [city, setCity] = useState(localStorage.getItem("City"));
  const [tempSelect, setTempSelect] = useState(true); //true = Celsius , false = Farenheit
  const [menuOpened, setMenuOpened] = useState(false);
  const [data, fetchErr, isLoading, axiosFetch] = useAxios();
  if (fetchErr === "Request failed with status code 400") {
    localStorage.setItem("City", "Moscow");
  }
  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: `current.json?key=${API_KEY}&q=${city.toLowerCase()}&aqi=no`,
    });
  };

  useEffect(() => {
    getData();
  }, [city]);

  return (
    <div className="App">
      {fetchErr && (
        <p className="error" style={{ color: "red" }}>
          {fetchErr === "Request failed with status code 400"
            ? "City not Found. Try to reload page"
            : `ERROR: {fetchErr}`}
        </p>
      )}
      {isLoading && (
        <>
          <div className="loading">
            <div className="img"></div>
          </div>
        </>
      )}
      {!isLoading && !fetchErr && data.location && (
        <>
          <div
            className={
              data.current.is_day === 1 ? "container" : "container night"
            }
          >
            <Navbar
              tempSelect={tempSelect}
              setTempSelect={setTempSelect}
              isDay={data.current.is_day}
              setCity={setCity}
              city={city}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
            <main onClick={() => setMenuOpened(false)}>
              <Content
                weather={data.current}
                tempSelect={tempSelect}
                city={city}
                menuOpened={menuOpened}
              />
              <Footer locTime={data.location.localtime} />
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

/*
  1. States:
    - city, setCity
    - isDay, setIsDay
    - temp, setTemp
    - condition, setCondition
    - windDir, setWindDir
    - windSpeed, setWindSpeed
    - pressure, setPressure
    - hum, setHum
    - uv, setUv
    - locdate, setLocDate
    - tempSelect, setTempSelect
  2. Imports:
    - axios, useState, useEffect
  3. 


*/

/* 
{
  "location": {
      "name": "Moscow",
      "region": "Moscow City",
      "country": "Russia",
      "lat": 55.75,
      "lon": 37.62,
      "tz_id": "Europe/Moscow",
      "localtime_epoch": 1676128953,
      "localtime": "2023-02-11 18:22"
  },
  "current": {
      "last_updated_epoch": 1676128500,
      "last_updated": "2023-02-11 18:15",
      "temp_c": -2.0,
      "temp_f": 28.4,
      "is_day": 0,
      "condition": {
          "text": "Light snow",
          "icon": "//cdn.weatherapi.com/weather/64x64/night/326.png",
          "code": 1213
      },
      "wind_mph": 18.6,
      "wind_kph": 29.9,
      "wind_degree": 190,
      "wind_dir": "S",
      "pressure_mb": 1007.0,
      "pressure_in": 29.74,
      "precip_mm": 0.2,
      "precip_in": 0.01,
      "humidity": 74,
      "cloud": 50,
      "feelslike_c": -8.6,
      "feelslike_f": 16.5,
      "vis_km": 9.0,
      "vis_miles": 5.0,
      "uv": 1.0,
      "gust_mph": 23.5,
      "gust_kph": 37.8
  }
} */
