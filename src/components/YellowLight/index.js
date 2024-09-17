import React from "react";

const YellowLight = ({ isActive }) => (
  <div className={`yellow-light ${isActive ? "active" : ""}`} />
);

export default YellowLight;
