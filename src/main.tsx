// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> deativated,  or else React Draft Wysiwyg dropdown options dosen't work. Don't know why.
  <AuthContextProvider>
     <App />
  </AuthContextProvider>
  // </React.StrictMode>
)
