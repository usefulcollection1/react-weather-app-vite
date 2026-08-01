import { useState, useEffect } from "react";
import "./App.css";

const cities = {
  Peshawar: { lat: 34.01, lon: 71.54 },
  Islamabad: { lat: 33.69, lon: 73.04 },
  Lahore: { lat: 31.58, lon: 74.36 },
};

function App() {
  const [city, setCity] = useState("Islamabad");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const { lat, lon } = cities[city];
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();
        setWeather(data.current_weather);
        console.log(`Weather data fetched for ${city}`);
      } catch {
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="app">
      <h1 className="title">🌈 React Weather App</h1>
      <div className="buttons">
        {Object.keys(cities).map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            disabled={loading}
            className={city === c ? "active" : ""}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="card">
        {loading && <p className="loading">☁ Loading weather data...</p>}
        {error && <p className="error">⚠ {error}</p>}
        {weather && !loading && !error && (
          <div className="fade-in">
            <h2>{city}</h2>
            <p>🌡 Temperature: {weather.temperature} ℃</p>
            <p>💨 Wind Speed: {weather.windspeed} km/h</p>
            <p>🕓 Time: {weather.time}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
