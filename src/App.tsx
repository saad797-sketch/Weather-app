import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherByCity, fetchWeatherByCoords } from "./services/weatherApi";
import type { WeatherData } from "./types/Weather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeatherByCity(city);
      setWeather(data);
      setError("");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const data = await fetchWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude
      );
      setWeather(data);
    });
  }, []);

  return (
    <div className="app-shell">
      <main className="app-container">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Pronóstico simple</span>
            <h1>Weather App</h1>
            <p className="hero-text">
              Busca tu ciudad y consulta el clima actual con una interfaz moderna,
              clara y ligera.
            </p>
          </div>

          <SearchBar onSearch={handleSearch} />
        </section>

        {error && <p className="message error">{error}</p>}

        {weather && <WeatherCard data={weather} />}
      </main>
    </div>
  );
}

export default App;