import React, { useState, useEffect } from "react";
import GreenLight from "./components/GreenLight";
import YellowLight from "./components/YellowLight";
import RedLight from "./components/RedLight";
import PedestrianButton from "./components/PedestrianButton";
import EmergencyOverrideButton from "./components/EmergencyOverrideButton";
import "./App.css";

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("green");
  const [pedestrianRequested, setPedestrianRequested] = useState(false);
  const [emergencyOverride, setEmergencyOverride] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (emergencyOverride) {
      setCurrentLight("red");
      setTimer(7);
      setEmergencyOverride(false);
    } else {
      const countdown = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
        if (timer === 0) {
          switchLight();
        }
      }, 1000);

      return () => clearTimeout(countdown);
    }
  }, [timer, currentLight, emergencyOverride]);

  const switchLight = () => {
    if (currentLight === "green") {
      setCurrentLight("yellow");
      setTimer(1);
    } else if (currentLight === "yellow") {
      setCurrentLight("red");
      setTimer(pedestrianRequested ? 5 : 7);
      setPedestrianRequested(false);
    } else if (currentLight === "red") {
      setCurrentLight("green");
      setTimer(10);
    }
  };

  const handlePedestrianRequest = () => {
    setPedestrianRequested(true);
  };

  const handleEmergencyOverride = () => {
    setEmergencyOverride(true);
  };

  return (
    <div className="container">
      <div className='traffic-light'>
        <GreenLight isActive={currentLight === "green"} />
        <YellowLight isActive={currentLight === "yellow"} />
        <RedLight isActive={currentLight === "red"} />
      </div>
      <PedestrianButton onClick={handlePedestrianRequest} />
      <EmergencyOverrideButton
        onClick={handleEmergencyOverride}
        isFlashing={emergencyOverride}
      />
      <div>Current light: {currentLight.toUpperCase()}</div>
      <div>Time remaining: {timer} seconds</div>
    </div>
  );
};

export default TrafficLight;
