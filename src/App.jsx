import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page
import Store from "./pages/Store/Store.jsx";
import Home from "./pages/Home/Home.jsx";
import Rebirth from "./pages/Rebirth/Rebirth.jsx";
import Clicker from "./pages/Clicker/Clicker.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/rebirth" element={<Rebirth />} />
        <Route path="/clicker" element={<Clicker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
