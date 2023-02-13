function Weather({ isDay, temp_c, temp_f, condition, tempSelect, city }) {
  return (
    <div className="weather">
      <p className="city">{!city ? "-" : city}</p>
      <p className="isDay">{isDay === 1 ? "Day" : "Night"}</p>
      <p className="temp">
        {!temp_c && !temp_f ? "-" : tempSelect ? temp_c + "°C" : temp_f + "°F"}
      </p>
      <p className="condition">{!condition ? "-" : condition.text}</p>
    </div>
  );
}

export default Weather;
