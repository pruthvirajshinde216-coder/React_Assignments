import { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);

  const submitFeedback = (value) => {
    setFeedback(value);
    setCount(count + 1);
  };

  let message = "";

  if (feedback === "Good") {
    message = "Thank you for your positive feedback!";
  } else if (feedback === "Average") {
    message = "We'll try to improve.";
  } else if (feedback === "Poor") {
    message = "Sorry for the inconvenience.";
  }

  // Common Button Style
  const buttonStyle = {
    color: "black",
    border: "2px solid black",
    borderRadius: "20px",
    padding: "10px 20px",
    margin: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div className="card">
      <h2>Assignment 5 : Feedback Collector</h2>

      <button
        onClick={() => submitFeedback("Good")}
        style={{ ...buttonStyle, backgroundColor: "#14aabd" }}
      >
        😊 Good
      </button>

      <button
        onClick={() => submitFeedback("Average")}
        style={{ ...buttonStyle, backgroundColor: "#14aabd" }}
      >
        😐 Average
      </button>

      <button
        onClick={() => submitFeedback("Poor")}
        style={{ ...buttonStyle, backgroundColor: "#14aabd" }}
      >
        😞 Poor
      </button>

      <h3>Selected Feedback : {feedback}</h3>

      <p>Total Feedback Given : {count}</p>

      <p>{message}</p>
    </div>
  );
}

export default Feedback;