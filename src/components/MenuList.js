import React from "react";

function MenuList({
  setIsSelectCity,
  tempSelect,
  setTempSelect,
  setMenuOpened,
  isDay,
}) {
  const changeTemp = () => {
    console.log(tempSelect);
    if (tempSelect) {
      setTempSelect(false);
      setMenuOpened(false);
    } else {
      setTempSelect(true);
      setMenuOpened(false);
    }
  };
  return (
    <>
      <li
        id={isDay === 1 ? "" : "night"}
        className="navbar__item"
        onClick={() => setIsSelectCity(true)}
      >
        Select City
      </li>
      <li
        id={isDay === 1 ? "" : "night"}
        className="navbar__item"
        onClick={() => {
          console.log(tempSelect);
          changeTemp();
        }}
      >
        {tempSelect ? "Show Celsius °C" : "Show Fahrenheit °F"}
      </li>
      <li id={isDay === 1 ? "" : "night"} className="navbar__item">
        About
      </li>
    </>
  );
}

export default MenuList;
