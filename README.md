# 🌤️ Weather App — React + TypeScript + Vite

Aplicación web del clima desarrollada con **React**, **TypeScript** y **Vite**, que permite consultar condiciones meteorológicas en tiempo real mediante búsqueda por ciudad o geolocalización del navegador.

---

## 🚀 Demo

🔗 Próximamente (deploy en Vercel)

---

## 🧠 Descripción

Proyecto enfocado en el desarrollo de una aplicación frontend moderna utilizando una arquitectura basada en componentes.

La aplicación consume una API externa para obtener datos meteorológicos y los renderiza dinámicamente en la interfaz, aplicando buenas prácticas como tipado estricto, separación de responsabilidades y manejo de estado.

---

## ⚙️ Stack tecnológico

* ⚛️ React
* 🟦 TypeScript
* ⚡ Vite
* 🌐 Fetch API
* 📍 Geolocation API
* 🎨 SVG dinámicos

---

## ✨ Funcionalidades

* 🔍 Búsqueda de clima por ciudad
* 📍 Detección automática de ubicación del usuario
* 🌡️ Visualización de temperatura y condiciones climáticas
* 💧 Información adicional (humedad, sensación térmica)
* 🎨 Iconos SVG dinámicos según el clima
* ⚡ Renderizado reactivo
* 🔐 Uso de variables de entorno para la API Key

---

## 🧩 Arquitectura del proyecto

```bash id="5l3s0z"
src/
│
├── components/
│   ├── SearchBar.tsx
│   └── WeatherCard.tsx
│
├── services/
│   └── weatherApi.ts
│
├── types/
│   └── Weather.ts
│
├── utils/
│   └── getWeatherIcon.tsx
│
└── App.tsx
```

---

## 🧠 Conceptos aplicados

* Componentización en React
* Manejo de estado con `useState`
* Ciclo de vida con `useEffect`
* Consumo de APIs con `async/await`
* Tipado estricto con TypeScript
* Separación de lógica (services, utils)
* Manejo de errores

---

## 🔑 Variables de entorno

Crear un archivo `.env` en la raíz:

```env id="2bnk13"
VITE_API_KEY=tu_api_key
```

---

## ▶️ Instalación y ejecución

```bash id="3qhmz6"
git clone https://github.com/tu-usuario/weather-app-react-ts.git
cd weather-app-react-ts
npm install
npm run dev
```

---

## 📈 Posibles mejoras

* 🌙 Modo oscuro / claro
* 🎞️ Animaciones en SVG
* 📊 Datos adicionales del clima
* 💾 Persistencia de búsqueda
* 📱 Diseño responsive mejorado

---

## 👨‍💻 Autor

Proyecto desarrollado como parte de mi formación en desarrollo frontend moderno, enfocado en aplicaciones escalables con React y TypeScript.
