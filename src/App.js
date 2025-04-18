
import Weather from './Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="weather-app-container">
        <header className="App-header">
          <h3 className="app-title">Weather Search Engine</h3>
          <form>
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-input"
            />
            <input type="submit" value="Search" className="submit-btn" />
          </form>
        </header>
        <main>
          <Weather defaultCity="New York" />
        </main>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Nastija-Sij" target="_blank">
            Nastija Sij
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Nastija-Sij/react-weather-search-engine"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
