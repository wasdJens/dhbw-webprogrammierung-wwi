import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Hello React!</h1>
      <div className="app-content-container">
        <Navigation />
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
