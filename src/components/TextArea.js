import React from "react";
import { useState } from "react";
import About from "./About";

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
      let input = document.getElementById("FloatingTextArea").value;
      let text = input.replace(/\s+/g, " ").trim();
      setWords(text.split(" ").length);
      setMinutes(text.split(" ").length * 0.005);
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

  const handleExtraSpaces = () => {
    //let text= input.split(/\s+/g).join(" ").trim()
    let text = input.replace(/\s+/g, " ").trim();
    setOutput(text);
  };

  const autoModify = () => {
    let text = input.replace(/\s+/g, " ").trim();
    text = text.replaceAll(". ", ".");
    let wordArray = text.split(".");
    text = "";
    wordArray.forEach((word) => {
      text = text + word.slice(0, 1).toUpperCase() + word.slice(1) + ". ";
    });
    setOutput(text);
  };

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

  const handleOverlayOpen = () => {
    document.getElementById("overlay").style.display = "block";
  };

  const handleOverlayClose = () => {
    document.getElementById("overlay").style.display = "none";
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginLeft: "100px" }}>
          {buttons(autoModify, "lightseagreen", "Auto Modify")}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-info-circle-fill"
          viewBox="0 0 16 16"
          style={{ fontSize: "12px" }}
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
        </svg>
        <p
          style={{
            alignContent: "center",
            textDecoration: "underline",
            fontSize: "12px",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={handleOverlayOpen}
        >
          Know More
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
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
      <div
        id="overlay"
        style={{
          position: "fixed",
          display: "none",
          width: "100%",
          height: "100%",
          backgroundColor: "gray",
          zIndex: "2",
          cursor: "pointer",

          // cursor: pointer
        }}
      >
        <div style={{ padding: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
            onClick={handleOverlayClose}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </div>
        <div style={{ margin: "50px" }}>
          <About />
        </div>
      </div>
    </div>
  );
}

export default TextArea;
