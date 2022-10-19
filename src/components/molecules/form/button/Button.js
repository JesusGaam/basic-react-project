import React from "react";
import "./Button.scss";

const Button = ({
  options = {},
  className,
  onClick = (_event) => {
    console.log("clicked button");
  },
}) => {
  const { mode = "primary", disabled = false, value = "" } = options;

  return (
    <input
      className={`form-element button ${mode} ${className} ${
        disabled ? "disabled" : ""
      }`}
      type="button"
      value={value}
      onClick={(e) => onClick(e)}
    />
  );
};

export default Button;
