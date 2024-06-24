import React from "react";
import ReactDOM from "react-dom";

function renderApp() {
  const root = document.getElementById("root");
  const e = React.createElement;
  const App = () => e("h1", null, "Hello from React");
  ReactDOM.createRoot(e(App), root);
}

// Ensure the DOM is fully loaded before rendering
if (document.readyState === "complete") {
  renderApp();
} else {
  window.addEventListener("load", renderApp);
}
