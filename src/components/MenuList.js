import React from "react";

function MenuList({
  setIsSelectCity,
  tempSelect,
  setTempSelect,
  setMenuOpened,
  isDay,
  setShowAboutWindow,
}) {
  const showAbout = () => {
    setShowAboutWindow(true);
    setMenuOpened(false);
  };

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
          changeTemp();
        }}
      >
        {tempSelect ? "Show Celsius °C" : "Show Fahrenheit °F"}
      </li>
      <li
        id={isDay === 1 ? "" : "night"}
        className="navbar__item"
        onClick={() => {
          showAbout();
        }}
      >
        About
      </li>
    </>
  );
}

export default MenuList;
