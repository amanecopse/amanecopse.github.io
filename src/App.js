import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Welcome></Welcome>
      <Content></Content>
    </div>
  );
}

export default App;
