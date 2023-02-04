import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
