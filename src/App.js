import "./App.css";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div style={{ backgroundColor:"palevioletred", height: "100vh"}}>
      <NavBar title="textArena" aboutUs="About Tool"></NavBar>
      <TextArea></TextArea>
    </div>
  );
}

export default App;
