import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlobalFonts from './styles.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>,
)
