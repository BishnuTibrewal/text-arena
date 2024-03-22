import React from "react";
import { useState } from "react";

function TextArea() {
  const [text, setText] = useState("Waiting for your Selection");
  const [chars, setChars] = useState(0);
  const [words, setWords] = useState(0);
  const [minutes, setMinutes] = useState(0);

  function summary() {
    setChars(document.getElementById("OutputTextArea").value.length);
    setWords(document.getElementById("OutputTextArea").value.split(" ").length);
    setMinutes(words * 0.005);
  }

  const capitalCase = () => {
    document.getElementById("OutputTextArea").value = document
      .getElementById("FloatingTextArea")
      .value.toUpperCase();
    setText("Final Output");
    summary();
  };

  const smallCase = () => {
    document.getElementById("OutputTextArea").value = document
      .getElementById("FloatingTextArea")
      .value.toLowerCase();
    setText("Final Output");
    summary();
  };

  const limitText50 = () => {
    document.getElementById("OutputTextArea").value = document
      .getElementById("FloatingTextArea")
      .value.substring(0, 50);
    setText("Final Output");
    summary();
  };

  const limitText100 = () => {
    document.getElementById("OutputTextArea").value = document
      .getElementById("FloatingTextArea")
      .value.substring(0, 100);
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

  return (
    <div style={{ margin: 50 }}>
      <div style={{ marginBottom: 10 }}>
        <b>Enter the text to Analyze: </b>
      </div>
      <textArea
        className="form-control"
        placeholder="Enter the Text here"
        id="FloatingTextArea"
        rows={4}
      ></textArea>
      {buttons(capitalCase, "lightseagreen", "Change to Capital Letters")}
      {buttons(smallCase, "steelblue", "Change to Small Letters")}
      {buttons(limitText50, "lightseagreen", "Limit to Fifty Characters")}
      {buttons(limitText100, "steelblue", "Limit to Hundred Characters")}
      <div style={{ marginTop: 30, marginBottom: 10 }}>
        <b>{text}</b>
      </div>
      <textArea
        className="form-control"
        placeholder="Enter the Text here"
        id="OutputTextArea"
        rows={4}
      ></textArea>
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
