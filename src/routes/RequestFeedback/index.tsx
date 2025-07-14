import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RequestFeedback } from "./screens/RequestFeedback";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RequestFeedback />
  </StrictMode>,
);
