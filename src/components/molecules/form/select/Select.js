import React, { useEffect, useState, useRef } from "react";
import "./Select.scss";
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import Chevron from "img/chevron-down-scroll-down.svg";
import { getRandomNumber } from "../../../../utils/Utilities";
import { removeClass, addClass } from "../../../../utils/Utilities";

const Select = ({ options, handleValue = (_value, _init) => {} }) => {
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
      { label: "First option", id: "1" },
      { label: "Second option", id: "2" },
      { label: "Tird option", id: "3" },
      { label: "Fourth option", id: "4" },
      { label: "Fifth option", id: "5" },
      { label: "Sixth option", id: "6" },
      { label: "Seventh option", id: "7", selected: true },
      { label: "Eighth option", id: "8" },
      { label: "Nineth option", id: "9" },
      { label: "Tenth option", id: "10" },
    ],
  } = options;
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState("");
  const selectRef = useRef();

  useEffect(() => {
    let selectedKey = 0;
    for (var i in optionList) {
      if (optionList[i].selected) {
        selectedKey = i;
      }
    }
    setValue(optionList[selectedKey].label);
    handleValue(optionList[selectedKey].id, true);
  
  }, []);

  const onClick = (element, selectedValue) => {
    removeClass(
      selectRef.current.querySelector(".option-text.selected"),
      "selected"
    );
    addClass(element, "selected");

    setShowOptions(false);
    setValue(selectedValue.label);
    handleValue(selectedValue.id);
  };

  return (
    <div
      className={`form-element select-input ${disabled ? "disabled" : ""}`}
      ref={selectRef}
    >
      <Label
        options={{
          id,
          required,
          label,
        }}
      />
      <div className="select-container">
        <div
          className={`input`}
          onClick={() => {
            if (!disabled) {
              setShowOptions(true);
            }
          }}
        >
          <Chevron alt="arrow" />
          <div className="selected-value" id={id}>
            {value}
          </div>
        </div>
        <div className={`option-container ${showOptions ? "show-option" : ""}`}>
          {optionList.map((o, i) => (
            <div
              key={i}
              data-id={o.id}
              className={`option-text ${o.selected ? "selected" : ""}`}
              onClick={(event) => {
                const element = event.target;
                const selectedValue = {
                  id: element.getAttribute("data-id"),
                  label: element.textContent,
                };
                onClick(element, selectedValue);
              }}
            >
              {o.label}
            </div>
          ))}
        </div>
      </div>
      <HelperText
        options={{
          error,
          helperText: helper || defaultHelper,
        }}
      />
    </div>
  );
};

export default Select;
