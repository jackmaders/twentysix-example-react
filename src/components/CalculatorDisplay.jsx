import React from "react";
import PropTypes from "prop-types";

function CalculatorDisplay({
  primaryDisplay,
  secondaryDisplay,
  currentOperation,
}) {
  return (
    <div className="bg-slate-500 w-full rounded flex flex-col items-end justify-evenly text-white p-2 h-20">
      <div className="flex gap-2">
        <span>{secondaryDisplay}</span>
        <i
          className={`fa-solid text-xs flex justify-center items-center fa-${currentOperation}`}
        ></i>
      </div>
      <div className="text-2xl font-medium">{primaryDisplay}</div>
    </div>
  );
}

CalculatorDisplay.propTypes = {
  primaryDisplay: PropTypes.string.isRequired,
  secondaryDisplay: PropTypes.string.isRequired,
  currentOperation: PropTypes.string.isRequired,
};

export default CalculatorDisplay;
