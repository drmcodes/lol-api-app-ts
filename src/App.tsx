import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Champions from "./pages/Champions";
import Items from "./pages/Items";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
