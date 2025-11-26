import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SiteRoutes from "./SiteRoutes.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  import.meta.env.DEV ? (
    <StrictMode>
      <SiteRoutes />
    </StrictMode>
  ) : (
    <SiteRoutes />
  )
);
