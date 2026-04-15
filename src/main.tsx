import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const faviconUrl = new URL('../SVG/clear-svgrepo-com.svg', import.meta.url).href;
const faviconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
if (faviconLink) {
  faviconLink.href = faviconUrl;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
