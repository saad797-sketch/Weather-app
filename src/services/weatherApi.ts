import type { WeatherData } from "../types/Weather";

const API_KEY = 'a6a70845e70e567f1d451c7618ad3d37';

export async function fetchWeatherByCity(city: string): Promise<WeatherData> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Ciudad no encontrada");
  }

  return response.json();
}

export async function fetchWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Error al obtener clima");
  }

  return response.json();
}