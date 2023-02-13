import React from "react";

function Wind({ wind_dir, wind_kph, isDay }) {
  const makeWindDir = (wind_dir) => {
    const dir_textMap = new Map();
    dir_textMap.set("N", "North");
    dir_textMap.set("NNE", "North-NorthEast");
    dir_textMap.set("NE", "North-East");
    dir_textMap.set("ENE", "East-NorthEast");
    dir_textMap.set("E", "East");
    dir_textMap.set("ESE", "East-SouthEast");
    dir_textMap.set("SE", "SouthEast");
    dir_textMap.set("SSE", "South-SouthEast");
    dir_textMap.set("S", "South");
    dir_textMap.set("SSW", "South-SouthWest");
    dir_textMap.set("SW", "South-West");
    dir_textMap.set("WSW", "West-SouthWest");
    dir_textMap.set("W", "West");
    dir_textMap.set("WNW", "West-NorthWest");
    dir_textMap.set("NW", "North-West");
    dir_textMap.set("NNW", "North-NorthWest");

    for (let [key, value] of dir_textMap) {
      if (key === wind_dir) {
        return value;
      }
    }
  };

  return (
    <div className={isDay === 1 ? "wind" : "wind night"}>
      <div className="wind__labels">
        <p>Wind</p>
        <p>Direction</p>
        <p>Speed</p>
      </div>
      <div className="wind__values">
        <p></p>
        <p>{makeWindDir(wind_dir)}</p>
        <p>{Math.floor(wind_kph / 3.6)}m/s</p>
      </div>
    </div>
  );
}

export default Wind;
