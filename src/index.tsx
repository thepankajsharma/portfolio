import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./app/App";
import { ThemeProvider } from "@mui/system";
import { storeTheme } from "./assets/css/style";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider theme={createTheme(storeTheme)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
