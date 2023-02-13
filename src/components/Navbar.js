import React from "react";
import SelectCity from "./SelectCity";
import { useState } from "react";
import MenuList from "./MenuList";

function Navbar({
  tempSelect,
  setTempSelect,
  isDay,
  setCity,
  city,
  menuOpened,
  setMenuOpened,
}) {
  const [isSelectCity, setIsSelectCity] = useState(false);

  const openMenu = () => {
    if (!menuOpened) {
      setMenuOpened(true);
      setIsSelectCity(false);
    } else {
      setMenuOpened(false);
      setIsSelectCity(false);
    }
  };

  return (
    <header className="header" id={!menuOpened ? "" : "toggled"}>
      <div className="navbar">
        <div className="logo-container">
          <a href="/" className={isDay === 1 ? "logo" : "logo night"}>
            Weather
          </a>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            openMenu();
          }}
        >
          <div
            className={isDay === 1 ? "bar" : "bar night"}
            id={!menuOpened ? "" : "toggled"}
          ></div>
          <div
            className={isDay === 1 ? "bar" : "bar night"}
            id={!menuOpened ? "" : "toggled"}
          ></div>
          <div
            className={isDay === 1 ? "bar" : "bar night"}
            id={!menuOpened ? "" : "toggled"}
          ></div>
        </div>
      </div>
      <nav
        className={menuOpened ? "navbar__menu" : "navbar__menu hidden"}
        id={isDay === 1 ? "" : "night"}
      >
        <ul className="navbar__list">
          {isSelectCity && (
            <SelectCity
              isSelectCity={isSelectCity}
              setIsSelectCity={setIsSelectCity}
              city={city}
              setCity={setCity}
              setMenuOpened={setMenuOpened}
              isDay={isDay}
            />
          )}
          {!isSelectCity && (
            <MenuList
              setIsSelectCity={setIsSelectCity}
              tempSelect={tempSelect}
              setTempSelect={setTempSelect}
              setMenuOpened={setMenuOpened}
              isDay={isDay}
            />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
