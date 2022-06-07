import React from "react";
import CalculatorButton from "./CalculatorButton";

function CalculatorControls({
  clearDisplay,
  deleteCharacter,
  appendCharacter,
  setOperation,
  calculateAnswer,
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <CalculatorButton
        buttonType="control"
        buttonIcon="ban"
        onClick={clearDisplay}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="control"
        buttonIcon="delete-left"
        onClick={deleteCharacter}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="1"
        onClick={() => {
          appendCharacter(1);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="2"
        onClick={() => {
          appendCharacter(2);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="3"
        onClick={() => {
          appendCharacter(3);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="operation"
        buttonIcon="plus"
        onClick={() => {
          setOperation("plus");
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="4"
        onClick={() => {
          appendCharacter(4);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="5"
        onClick={() => {
          appendCharacter(5);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="6"
        onClick={() => {
          appendCharacter(6);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="operation"
        buttonIcon="minus"
        onClick={() => {
          setOperation("minus");
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="7"
        onClick={() => {
          appendCharacter(7);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="8"
        onClick={() => {
          appendCharacter(8);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="9"
        onClick={() => {
          appendCharacter(9);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="operation"
        buttonIcon="times"
        onClick={() => {
          setOperation("times");
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="0"
        onClick={() => {
          appendCharacter(0);
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="number"
        buttonIcon="circle"
        onClick={() => {
          appendCharacter(".");
        }}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="calculate"
        buttonIcon="equals"
        onClick={calculateAnswer}
      ></CalculatorButton>
      <CalculatorButton
        buttonType="operation"
        buttonIcon="divide"
        onClick={() => {
          setOperation("divide");
        }}
      ></CalculatorButton>
    </div>
  );
}

export default CalculatorControls;
