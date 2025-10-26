import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Tailwind CSS import
import "./index.css"; // Make sure this file exists and has Tailwind directives

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
