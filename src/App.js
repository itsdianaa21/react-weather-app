import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project was created by Diana Menendez and is
          <a
            href="https://github.com/itsdianaa21/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced{" "}
          </a>
          on Github.
        </footer>
      </div>
    </div>
  );
}
