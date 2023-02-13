import React from "react";
import { useState } from "react";

function SelectCity({ setIsSelectCity, city, setCity, setMenuOpened, isDay }) {
  const [textValue, setTextValue] = useState("");

  const toProperString = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityText = toProperString(textValue);

    if (city !== cityText) {
      setCity(cityText);
      localStorage.setItem("City", cityText);
    }
    setIsSelectCity(false);
    setMenuOpened(false);
  };
  return (
    <form className="cityInput" onSubmit={(e) => handleSubmit(e)}>
      <input
        className={isDay === 1 ? "textInput" : "textInput night"}
        id="searchCity"
        type="text"
        role="searchbox"
        placeholder="Input City"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      ></input>
    </form>
  );
}

export default SelectCity;
