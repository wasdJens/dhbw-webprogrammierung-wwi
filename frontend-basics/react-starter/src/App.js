import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Example from "./components/Example";
import JSX from "./components/JSX";
import Components from "./components/Components";
import Lists from "./components/Lists";
import Parent from "./components/ParentChild";
import Smart from "./components/SmartDumb";
import MainPage from "./components/ComponentAsProp";
import BeerComponent from "./api-communication/Beer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Timer />
        <Example />
        <JSX />
        <Components />
        <Lists />
        <Parent />
        <Smart />
        <MainPage />
        <BeerComponent />
      </header>
    </div>
  );
}

export default App;
