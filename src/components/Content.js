import Weather from "./Weather";
import Wind from "./Wind";
import AdInf from "./AdInf";
import Footer from "./Footer";

function Content({ weather, tempSelect, city, cityName, locTime }) {
  return (
    <div className="content">
      <Weather
        isDay={weather.is_day}
        temp_c={weather.temp_c}
        temp_f={weather.temp_f}
        condition={weather.condition}
        tempSelect={tempSelect}
        city={city}
        cityName={cityName}
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
      <Footer isDay={weather.is_day} locTime={locTime} />
    </div>
  );
}

export default Content;
