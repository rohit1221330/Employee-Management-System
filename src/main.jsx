import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Authprovider from './context/Authprovider.jsx';

// Sahi path ke saath apne LocalStorage file se initializeData ko import karein
import { initializeData } from './utils/LocalStorage.jsx'; 

// App render hone se pahle data ko initialize karein
initializeData();

// React application ko render karein
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </StrictMode>
);