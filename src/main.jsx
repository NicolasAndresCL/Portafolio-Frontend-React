import ReactDOM from 'react-dom/client';
import { Provider } from "@/components/ui/provider"
import React from "react"
import App from './App';
import './index.css'; // <--- aquí importas Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
