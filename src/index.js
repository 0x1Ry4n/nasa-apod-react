import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Title from "./components/Title/Title";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div id="stars"></div>
    <Title className="Title" text="🌌 APOD (Astronomy Picture of the Day)" />
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
