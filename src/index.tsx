import { App } from "./app";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "styles/global";

const container = document.getElementById("root") as HTMLDivElement;

const root = createRoot(container);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
