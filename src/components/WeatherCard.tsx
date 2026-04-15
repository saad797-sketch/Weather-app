import { getWeatherIcon } from "../../utils/getWeatherIcon";
import type { WeatherData } from "../types/Weather";

interface Props {
  data: WeatherData;
}

function WeatherCard({ data }: Props) {
  const weatherItem = data.weather?.[0];
  const icon = getWeatherIcon(weatherItem?.main ?? "");

  return (
    <article className="weather-card">
      <div className="weather-card__header">
        <img
          className="weather-card__icon"
          src={icon}
          alt={weatherItem?.description ?? "weather icon"}
        />
        <div>
          <p className="weather-location">{data.name}</p>
          <p className="weather-description">{weatherItem?.description}</p>
        </div>
      </div>

      <div className="weather-card__body">
        <p className="weather-temp">{Math.round(data.main.temp)}°C</p>
        <div className="weather-metrics">
          <div className="metric-item">
            <span>Humedad</span>
            <strong>{data.main.humidity}%</strong>
          </div>
          <div className="metric-item">
            <span>Sensación</span>
            <strong>{Math.round(data.main.feels_like)}°C</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export default WeatherCard;