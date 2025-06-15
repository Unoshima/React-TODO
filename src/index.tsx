import React, { StrictMode } from "react"; //厳密なルールでReact記法を強要するMode
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement: HTMLElement = document.getElementById("root")!; //todo: nullチェック共通化しよう
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
