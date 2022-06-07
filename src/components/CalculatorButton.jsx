import React from "react";
import PropTypes from "prop-types";

function CalculatorButton({ buttonType, buttonIcon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center h-16 rounded transition-all hover:scale-105 ${
        buttonType === "number"
          ? " col-span-1 w-16 bg-slate-300 hover:bg-slate-400"
          : ""
      } ${
        buttonType === "operation"
          ? " col-span-1 w-16 bg-blue-300 hover:bg-blue-400"
          : ""
      } ${
        buttonType === "control"
          ? " col-span-2 w-36 bg-green-300 hover:bg-green-400"
          : ""
      } ${
        buttonType === "calculate"
          ? " col-span-1 w-16 bg-orange-300 hover:bg-orange-400"
          : ""
      }`}
    >
      <i className={`fa-solid fa-${buttonIcon}`}></i>
    </button>
  );
}

CalculatorButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string.isRequired,
};

export default CalculatorButton;
