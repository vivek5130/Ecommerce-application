import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* Define your routes here */}
    <Route path="/" element={<App />} />
    </Routes>

  </Router>
 
)
