import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;
const prerendered = rootElement.dataset.prerendered === "true";

createRoot(rootElement).render(<App prerendered={prerendered} />);
