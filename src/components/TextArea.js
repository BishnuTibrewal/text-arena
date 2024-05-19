import React from "react";
import { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("Waiting for your Selection");
  const [chars, setChars] = useState(0);
  const [words, setWords] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function summary() {
    setTimeout(() => {
      setChars(document.getElementById("FloatingTextArea").value.length);
      setWords(
        document.getElementById("FloatingTextArea").value.split(" ").length
      );
      setMinutes(
        document.getElementById("FloatingTextArea").value.split(" ").length *
          0.005
      );
    }, 1000);
  }

  const capitalCase = () => {
    setOutput(input.toUpperCase());
    setText("Final Output");
    props.handleAlert("Text changed to capital letters.");
  };

  const smallCase = () => {
    setOutput(input.toLowerCase());
    setText("Final Output");
    props.handleAlert("Text changed to small letters.");
  };

  const limitText50 = () => {
    setOutput(input.substring(0, 50));
    setText("Final Output");
    props.handleAlert("Text restricted to 50 characters.");
  };

  const limitText100 = () => {
    setOutput(input.substring(0, 100));
    setText("Final Output");
    props.handleAlert("Text restricted to 100 characters.");
  };

  const handleExtraSpaces=()=>{
   //let text= input.split(/\s+/g).join(" ").trim()
   let text= input.replace(/\s+/g, " ").trim()
   setOutput(text)
  }

  const buttons = (actionHandler, color, displayText) => {
    return (
      <button
        onClick={actionHandler}
        className={`btn btn-${props.mode}`}
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
    summary();
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setChars(0);
    setMinutes(0);
    setWords(0);
  };

  const handleCopy = () => {
    const text = document.getElementById("OutputTextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          marginBottom: 10,
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
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

      <div>
        <h6 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {words} words, {chars} characters
        </h6>
      </div>
      <div>
        <h6 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {minutes} minute(s) Read.
        </h6>
      </div>
      <div style={{ display: "flex", justifyContent: "end", margin: 10 }}>
        <button className={`btn btn-${props.mode}`} onClick={handleClear}>
          Clear
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {buttons(capitalCase, "lightseagreen", "Change to Capital Letters")}
        {buttons(smallCase, "steelblue", "Change to Small Letters")}
        {buttons(limitText50, "lightseagreen", "Limit to Fifty Characters")}
        {buttons(limitText100, "steelblue", "Limit to Hundred Characters")}
        {buttons(handleExtraSpaces, "lightseagreen", "Remove extra spaces")}
      </div>
      <div
        style={{
          marginTop: 10,
          marginBottom: 10,
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
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
        <button className={`btn btn-${props.mode}`} onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
}

export default TextArea;
