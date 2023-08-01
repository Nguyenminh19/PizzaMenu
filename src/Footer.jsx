import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = openHour < hour || openHour > closeHour;

  const content = isOpen
    ? `${new Date().toLocaleDateString()}. We're currently open`
    : "We're close";

  return <footer className="footer">{content}</footer>;
};

export default Footer;
