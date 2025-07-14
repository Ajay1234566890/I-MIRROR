import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WhomToSend } from "./screens/WhomToSend";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <WhomToSend />
  </StrictMode>,
);
