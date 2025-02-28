import { useState } from "react";
import "./Calculator.css"; // Importing CSS file

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      {/* Title of the calculator */}
      <h2>Simple Calculator</h2>

      {/* Display input field (readonly) to show user input and results */}
      <input type="text" value={input} readOnly className="display" />

      {/* Buttons for numbers and operators */}
      <div className="buttons">
        {[
          "7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "=", "+"
        ].map((item) => (
          <button
            key={item}
            onClick={() => (item === "=" ? calculateResult() : handleClick(item))}
            className="button"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Clear button to reset input field */}
      <button onClick={clearInput} className="clear-button">Clear</button>
    </div>
  );
};

export default Calculator;
