import React from 'react'; // <-- Don't skip this
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Assuming this has your Tailwind directives

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
