import React from "react";

const GreenLight = ({ isActive }) => (
  <div className={`green-light ${isActive ? "active" : ""}`} />
);

export default GreenLight;
