import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { UrlProvider } from './context/Url.jsx'; // ✅ import your provider

createRoot(document.getElementById('root')!).render(
  <UrlProvider>
    <App />
  </UrlProvider>
);