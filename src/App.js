import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="TITLE">content test</Header>
      <Menu type="title">TITLE</Menu>
      <Menu type="item">item</Menu>
      <Menu type="item" selected>
        item
      </Menu>
      <Button label="button" />
      <Button Size="Big" BgColor="white" label="helloworld" />
    </div>
  );
}

export default App;
