import React, { useEffect, useState } from "react";
import "./Checkbox.scss";
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import { hasClass, removeClass, addClass } from "@/utils/Utilities";
import { getRandomNumber } from "@/utils/Utilities";

const Checkbox = ({ options, handleValue = (_value, _init) => {} }) => {
  const {
    id = getRandomNumber(10000, 1000000),
    error = false,
    required = false,
    disabled = false,
    label = "",
    helper,
    defaultHelper,
    optionList = [
      { label: "Zero option", id: "0" },
      { label: "First option", id: "1", selected: true },
      { label: "Second option", id: "2" },
      { label: "Tird option", id: "3" },
    ],
  } = options;

  const [values, setValues] = useState([]);

  useEffect(() => {
    optionList.forEach((o) => {
      if (o.selected) {
        updateValues(o.id, o.selected);
      }
    });
  }, []);

  const updateValues = (value, isSelected) => {
    let newValues;

    if (!isSelected) {
      newValues = values.filter((item) => item !== value);
    } else {
      newValues = [...values, value];
    }
    setValues(newValues);
    handleValue(newValues);
  };

  const onClick = (event, value) => {
    const isSelected = hasClass(event.currentTarget, "selected");
    if (isSelected) {
      removeClass(event.currentTarget, "selected");
    } else {
      addClass(event.currentTarget, "selected");
    }

    updateValues(value, !isSelected);
  };

  return (
    <div
      className={`form-element checkbox-input ${disabled ? "disabled" : ""}`}
    >
      <Label
        options={{
          id,
          required,
          label,
        }}
      />
      {optionList.map((o, i) => (
        <div
          className={`checkbox ${o.selected ? "selected" : ""}`}
          key={i}
          onClick={(event) => {
            onClick(event, o.id);
          }}
        >
          <div>
            <div className="wave"></div>
            <div className="box">
              <div className="background"></div>
              <svg
                className="check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path>
              </svg>
            </div>
          </div>
          <div>{o.label}</div>
        </div>
      ))}
      <HelperText
        options={{
          error,
          helperText: helper || defaultHelper,
        }}
      />
    </div>
  );
};

export default Checkbox;
