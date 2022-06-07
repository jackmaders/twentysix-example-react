import React, { useState } from "react";
import CalculatorControls from "./components/CalculatorControls";
import CalculatorDisplay from "./components/CalculatorDisplay";

function App() {
  const [primaryDisplay, setPrimaryDisplay] = useState("ASD");
  const [secondaryDisplay, setSecondaryDisplay] = useState("ASDF");
  const [currentOperation, setCurrentOperation] = useState("minus");

  function clearDisplay() {
    setPrimaryDisplay("");
    setSecondaryDisplay("");
    setCurrentOperation("");
  }

  function deleteCharacter() {
    setPrimaryDisplay(primaryDisplay.toString().slice(0, -1));
  }

  function appendCharacter(character) {
    if (currentOperation === "" && secondaryDisplay !== "") return;
    if (character === "." && primaryDisplay.includes(".")) return;

    setPrimaryDisplay(primaryDisplay.toString() + character.toString());
  }

  function setOperation(operation) {
    if (secondaryDisplay === "" && primaryDisplay === "") return;
    if (primaryDisplay === ".") return;

    if (secondaryDisplay === "") {
      setSecondaryDisplay(primaryDisplay);
      setPrimaryDisplay("");
    }

    setCurrentOperation(operation);
  }

  function calculateAnswer() {
    if (primaryDisplay === "" || secondaryDisplay === "") return;

    const primaryValue = parseFloat(primaryDisplay);
    const secondaryValue = parseFloat(secondaryDisplay);
    if (isNaN(primaryValue) || isNaN(secondaryValue)) return;

    switch (currentOperation) {
      case "plus":
        setSecondaryDisplay(String(secondaryValue + primaryValue));
        break;
      case "minus":
        setSecondaryDisplay(String(secondaryValue - primaryValue));
        break;
      case "times":
        setSecondaryDisplay(String(secondaryValue * primaryValue));
        break;
      case "divide":
        setSecondaryDisplay(String(secondaryValue / primaryValue));
        break;
      default:
        return;
    }
    setPrimaryDisplay("");
    setCurrentOperation("");
  }

  return (
    <main className="container mx-auto my-32">
      <div className="flex flex-col gap-4 mx-auto rounded max-w-fit bg-slate-200 p-4">
        <CalculatorDisplay
          primaryDisplay={primaryDisplay}
          secondaryDisplay={secondaryDisplay}
          currentOperation={currentOperation}
        />
        <CalculatorControls
          clearDisplay={clearDisplay}
          deleteCharacter={deleteCharacter}
          appendCharacter={appendCharacter}
          setOperation={setOperation}
          calculateAnswer={calculateAnswer}
        />
      </div>
    </main>
  );
}

export default App;
