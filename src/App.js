import "./App.css";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message) =>{
    setAlert(message);
    setTimeout(()=>{
      setAlert("")
    },5000)
  }

  const closeAlert =()=>{
    setAlert("")
  }

  const handleModeChange = (event) => {
    if (mode === "dark") {
      setMode("light");
      handleAlert("Light Mode Enabled");
    } else {
      setMode("dark");
      handleAlert("Dark Mode Enabled");
    }
  };
  return (
    <>
      <NavBar
        title="textArena"
        aboutUs="About Tool"
        mode={mode}
        handleModeChange={handleModeChange}
      ></NavBar>
      <Alert alert={alert} closeAlert={closeAlert}></Alert>
      <div
        style={{
          backgroundColor: mode === "light" ? "palevioletred" : "gray",
          minHeight: "80h",
          padding: 20,
        }}
      >
        <TextArea mode={mode} handleAlert={handleAlert}></TextArea>
      </div>
      <Footer mode={mode}></Footer>
    </>
  );
}

export default App;
