import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './views/Home';
import { Table } from './views/Table';

function App() {
  return (
    <div className="App">
      <h1>Advanced Samples written in react</h1>
      <Link to="/">Back Home</Link>
      <nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Table />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
