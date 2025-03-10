import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleEqual = () => {
    try {
      if (input === "") {
        setResult("Error"); // If "=" is clicked with no input
      } else {
        let evalResult = eval(input); // Evaluating expression
        if (evalResult === Infinity) {
          setResult("Infinity"); // Handling division by zero
        } else if (isNaN(evalResult)) {
          setResult("NaN"); // Handling invalid cases like 0/0
        } else {
          setResult(evalResult);
        }
      }
    } catch {
      setResult("Error"); // Catching syntax errors
    }
  };

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">React Calculator</h1>

      <input
        type="text"
        value={input}
        readOnly
        className="border border-gray-400 px-3 py-2 w-64 text-lg text-center mb-2 rounded-md bg-white shadow-md"
      />

      <div className="text-2xl font-semibold mb-4 bg-white w-64 py-2 text-center rounded-md shadow-md">
        {result}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "+"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="w-16 h-16 border border-gray-500 text-xl bg-gray-200 hover:bg-gray-300 transition rounded-md shadow-md"
          >
            {item}
          </button>
        ))}
        <br/>
        {["4", "5", "6", "-"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="w-16 h-16 border border-gray-500 text-xl bg-gray-200 hover:bg-gray-300 transition rounded-md shadow-md"
          >
            {item}
          </button>
        ))}
        <br/>
        {["1", "2", "3", "*"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="w-16 h-16 border border-gray-500 text-xl bg-gray-200 hover:bg-gray-300 transition rounded-md shadow-md"
          >
            {item}
          </button>
        ))}
        <br/>
        {["C", "0", "=", "/"].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "=" ? handleEqual() : item === "C" ? handleClear() : handleClick(item)
            }
            className={`w-16 h-16 border border-gray-500 text-xl ${
              item === "C"
                ? "bg-red-300 hover:bg-red-400"
                : item === "="
                ? "bg-blue-300 hover:bg-blue-400"
                : "bg-gray-200 hover:bg-gray-300"
            } transition rounded-md shadow-md`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
