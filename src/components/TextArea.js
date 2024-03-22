import React from "react";
import { useState } from "react";

function TextArea() {
  const [text, setText] = useState("Waiting for your Selection");
  const [chars, setChars] = useState(0);
  const [words, setWords] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function summary() {
    setTimeout(() => {
      setChars(document.getElementById("OutputTextArea").value.length);
      setWords(
        document.getElementById("OutputTextArea").value.split(" ").length
      );
      setMinutes(
        document.getElementById("OutputTextArea").value.split(" ").length *
          0.005
      );
    }, 1000);
  }

  const capitalCase = () => {
    setOutput(input.toUpperCase());
    setText("Final Output");
    summary();
  };

  const smallCase = () => {
    setOutput(input.toLowerCase());
    setText("Final Output");
    summary();
  };

  const limitText50 = () => {
    setOutput(input.substring(0, 50));
    setText("Final Output");
    summary();
  };

  const limitText100 = () => {
    setOutput(input.substring(0, 100));
    setText("Final Output");
    summary();
  };

  const buttons = (actionHandler, color, displayText) => {
    return (
      <button
        onClick={actionHandler}
        className="btn btn-primary"
        style={{
          minWidth: 140,
          height: 44,
          margin: 10,
          backgroundColor: color,
          borderColor: color,
        }}
      >
        {displayText}
      </button>
    );
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setChars(0);
    setMinutes(0);
    setWords(0);
  };

  const handleCopy =()=>{
    const text= document.getElementById("OutputTextArea")
    text.select();
    navigator.clipboard.writeText(text.value);

  }

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <b>Enter the text to Analyze: </b>
      </div>
      <textarea
        className="form-control"
        placeholder="Enter the Text here"
        id="FloatingTextArea"
        value={input}
        onChange={handleChange}
        rows={4}
      ></textarea>
      <div style={{ display: "flex", justifyContent: "end", margin: 10 }}>
        <button className="btn btn-primary" onClick={handleClear}>
          Clear
        </button>
      </div>
      {buttons(capitalCase, "lightseagreen", "Change to Capital Letters")}
      {buttons(smallCase, "steelblue", "Change to Small Letters")}
      {buttons(limitText50, "lightseagreen", "Limit to Fifty Characters")}
      {buttons(limitText100, "steelblue", "Limit to Hundred Characters")}
      <div style={{ marginTop: 30, marginBottom: 10 }}>
        <b>{text}</b>
      </div>
      <textarea
        className="form-control"
        placeholder="Enter the Text here"
        id="OutputTextArea"
        rows={4}
        value={output}
      ></textarea>
      <div style={{ display: "flex", justifyContent: "end", margin: 10 }}>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div>
        <h6 style={{ marginTop: 10 }}>
          {words} words, {chars} characters
        </h6>
      </div>
      <div>
        <h6>{minutes} minute(s) Read.</h6>
      </div>
    </div>
  );
}

export default TextArea;
