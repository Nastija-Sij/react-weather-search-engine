import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-container">
        <main>
          <Weather defaultCity="Vienna" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Nastija-Sij"
            target="_blank"
            rel="noreferrer"
          >
            Nastija Sij
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Nastija-Sij/react-weather-search-engine"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
