// main.tsx
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

function RootApp() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
