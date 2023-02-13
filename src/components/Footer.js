import React from "react";

function Footer({ locTime, isDay }) {
  return (
    <footer className={isDay === 1 ? "footer" : "footer night"}>
      <section>
        <p>Local Time:</p>
        <p>{locTime}</p>
      </section>
    </footer>
  );
}

export default Footer;
