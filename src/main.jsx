import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App/App';
import './index.css';
import 'modern-normalize/modern-normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
