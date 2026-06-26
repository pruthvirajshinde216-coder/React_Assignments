import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="card">
      <h2>Assignment 1 : Live Character Counter</h2>

      <textarea
  rows="5"
  placeholder="Type here..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  style={{
    backgroundColor: "#14aabd",
    color: "blue",
    border: "2px solid #805386",
    borderRadius: "30px",
    padding: "5px"
  }}
/>

      <p><b>Characters:</b> {text.length}</p>
      <p><b>Words:</b> {words}</p>
    </div>
  );
}

export default CharacterCounter;