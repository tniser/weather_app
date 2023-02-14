function Weather({
  isDay,
  temp_c,
  temp_f,
  condition,
  tempSelect,
  city,
  cityName,
}) {
  return (
    <div className="weather">
      <p className="city">{!cityName ? "-" : cityName}</p>
      <div className="isDay">
        <p
          className="conditionIcon"
          style={{ backgroundImage: `url(${condition.icon})` }}
        ></p>
        <p className="isDay__text">{isDay === 1 ? "Day" : "Night"}</p>
      </div>
      <p className="temp">
        {!temp_c && !temp_f ? "-" : tempSelect ? temp_c + "°C" : temp_f + "°F"}
      </p>
      <p className="condition">{!condition ? "-" : condition.text}</p>
    </div>
  );
}

export default Weather;
