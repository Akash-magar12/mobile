import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Context } from "./Components/Context";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
