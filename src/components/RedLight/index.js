import React from "react";

const RedLight = ({ isActive }) => (
  <div className={`red-light ${isActive ? "active" : ""}`} />
);

export default RedLight;
