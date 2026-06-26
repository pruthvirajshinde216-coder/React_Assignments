import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("Grey");

  const buttonStyle = {
    color: "black",
    border: "2px solid black",
    borderRadius: "30px",
    padding: "10px 20px",
    margin: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold", 
    transition: "0.3s",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",

  };

  return (
    <div className="card">
      <h2>Assignment 3 : Favorite Color Picker</h2>

      <h3>Selected Color : {color}</h3>

      <div
        className="colorBox"
        style={{ backgroundColor: color }}
      >
        {color}
      </div>

      <button
        onClick={() => setColor("red")}
        style={{ ...buttonStyle, backgroundColor: "#14aabd" }}
      >
        Red
      </button>

      <button
        onClick={() => setColor("green")}
        style={{ ...buttonStyle, backgroundColor: "#14aabd" }}
      >
        Green
      </button>

      <button
        onClick={() => setColor("blue")}
        style={{ ...buttonStyle, backgroundColor: "#14aabd" }}
      >
        Blue
      </button>

      <button
        onClick={() => setColor("yellow")}
        style={{
          ...buttonStyle,
          backgroundColor: "#14aabd",
          color: "black",
        }}
      >
        Yellow
      </button>
    </div>
  );
}

export default ColorPicker;