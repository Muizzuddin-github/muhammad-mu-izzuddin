import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { SkeletonTheme } from "react-loading-skeleton";
import "./index.css";
import "aos/dist/aos.css";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <SkeletonTheme baseColor="#cfcfcf" highlightColor="#b0aeae">
        <App />
      </SkeletonTheme>
    </HelmetProvider>
  </React.StrictMode>
);
