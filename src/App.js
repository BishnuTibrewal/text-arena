import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <NavBar title="textArena" aboutUs="About Tool"></NavBar>
      <div style={{ backgroundColor: "palevioletred" ,minHeight: "100vh" , padding:50}}>
        <TextArea></TextArea>
        <About></About>
      </div>
    </>
  );
}

export default App;
