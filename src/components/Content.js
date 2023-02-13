import Weather from "./Weather";
import Wind from "./Wind";
import AdInf from "./AdInf";
import { useState } from "react";

function Content({ weather, tempSelect, city, menuOpened }) {
  return (
    <div className="content">
      <Weather
        isDay={weather.is_day}
        temp_c={weather.temp_c}
        temp_f={weather.temp_f}
        condition={weather.condition}
        tempSelect={tempSelect}
        city={city}
      />
      <Wind
        wind_dir={weather.wind_dir}
        wind_kph={weather.wind_kph}
        isDay={weather.is_day}
      />
      <AdInf
        pressure={weather.pressure_mb}
        humidity={weather.humidity}
        uv={weather.uv}
        isDay={weather.is_day}
      />
    </div>
  );
}

export default Content;
