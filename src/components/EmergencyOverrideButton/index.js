import React from "react";

const EmergencyOverrideButton = ({ onClick, isFlashing }) => (
  <button
    className={`emergency-button ${isFlashing ? "flashing" : ""}`}
    onClick={onClick}>
    Emergency
  </button>
);

export default EmergencyOverrideButton;
