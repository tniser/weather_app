import React from "react";

function AdInf({ pressure, uv, humidity, isDay }) {
  return (
    <div className={isDay === 1 ? "wind" : "wind night"}>
      <div className="wind__labels">
        <p>Pressure</p>
        <p>Humidity</p>
        <p>UV</p>
      </div>
      <div className="wind__values">
        <p>{Math.floor(pressure / 1.3332239)}mm</p>
        <p>{humidity}%</p>
        <p>{uv}</p>
      </div>
    </div>
  );
}

export default AdInf;
