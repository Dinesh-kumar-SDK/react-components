// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import FeaturesSection from './Components/FeaturesSection'
import Testimonials from './Components/Testimonials'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <>
    <Header />
    <LandingPage />
    <FeaturesSection />
    <Testimonials />
  </>
)
