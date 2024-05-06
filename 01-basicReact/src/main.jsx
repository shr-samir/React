import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewComponent from './NewComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <NewComponent />
  </React.StrictMode>,
)
