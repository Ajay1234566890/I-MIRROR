import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Journals } from "./screens/Journals";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Journals />
  </StrictMode>
);
