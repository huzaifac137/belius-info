import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import TermsAndConditions from './pages/TermsConditions.jsx';
import PrivacyPolicy from './pages/PrivayPolicy.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/terms-conditions' element={<TermsAndConditions/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
    </Routes>
  </BrowserRouter>
)
