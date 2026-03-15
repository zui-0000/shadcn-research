import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

const el = document.querySelector("#root");
if (!el) throw new Error("Not found #root");

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
