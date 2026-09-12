import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DeveloperDemo from './DeveloperDemo.jsx'
import ProfileDemo from './ProfileDemo.jsx'
import PhotographyDemo from './PhotographyDemo.jsx'

const path = window.location.pathname

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/developer-demo' ? (
  <DeveloperDemo />
) : path === '/photography-demo' ? (
  <PhotographyDemo />
) : path === '/profile-demo' ? (
  <ProfileDemo />
) : (
  <App />
)}
  </StrictMode>,
)
