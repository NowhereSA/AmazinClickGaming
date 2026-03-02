import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClickerProvider } from "./context/ClickerContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickerProvider>
      <App />
    </ClickerProvider>
  </StrictMode>,
);
