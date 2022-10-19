import React from "react";
import "./MotoNelaAnimation.scss";
import MotoNela from "img/nela-engine.png";

const MotoNelaAnimation = ({
  nelaAnimation = { transform: "translateX(0)" },
  reverse = false,
}) => {
  const lines = Array.from({ length: 200 }, (_, i) => (
    <div className="lines" key={i} />
  ));
  return (
    <div className="moto-nela-animation">
      <div className="asphalt">
        <div className="lines-container">
          <div className="lines"></div>
          {lines}
        </div>
      </div>
      <div className="nela-container" style={nelaAnimation}>
        <img
          src={MotoNela}
          className={`nela-motos ${reverse ? "reverse" : ""}`}
        />
        <div className="shadow"></div>
      </div>
    </div>
  );
};
export default MotoNelaAnimation;
