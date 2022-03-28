import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";

export default function Calculator() {
    const [text, setText] = useState('0')
    const handleOnChange = (event) => {
        setText(event.target.value) 
    }
  return (
    <div className="position-absolute start-50 mt-4 translate-middle">
      <input type="text" value={ text } onChange={handleOnChange} className="form-control-lg" />
      <CalculatorButton text="1" className="form-control"/>
      <CalculatorButton text="2" className="form-control"/>
      <CalculatorButton text="3" className="form-control"/>
      <CalculatorButton text="4" className="form-control"/>
      <CalculatorButton text="5" className="form-control"/>
      <CalculatorButton text="6" className="form-control"/>
      <CalculatorButton text="7" className="form-control"/>
      <CalculatorButton text="8" className="form-control"/>
      <CalculatorButton text="9" className="form-control"/>
      <CalculatorButton text="0" className="form-control"/>
      <CalculatorButton text="+" className="form-control"/>
      <CalculatorButton text="-" className="form-control"/>
      <CalculatorButton text="*" className="form-control"/>
      <CalculatorButton text="/" className="form-control"/>
      <CalculatorButton text="%" className="form-control"/>
    </div>
  );
}


