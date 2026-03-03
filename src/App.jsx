import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Page
import Store from "./pages/Store/Store.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
