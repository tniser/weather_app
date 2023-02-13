import React from "react";

function Footer({ locTime }) {
  return (
    <footer className="footer">
      <section>
        <p>Local Time:</p>
        <p>{locTime}</p>
      </section>
    </footer>
  );
}

export default Footer;
