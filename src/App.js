import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const handleModeChange = (event) => {
    if (mode=='dark') setMode("light");
    else setMode("dark");
  };
  return (
    <>
      <NavBar title="textArena" aboutUs="About Tool" mode={mode} handleModeChange={handleModeChange}></NavBar>
      <div style={{ backgroundColor: mode =='light' ?"palevioletred" :"gray" ,minHeight: "100vh" , padding:20}}>
        <TextArea mode={mode}></TextArea>
      </div>
    </>
  );
}

export default App;
