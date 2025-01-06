import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
import './index.css';
import Loader from './component/Loader/Loader.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Loader />
    {/* <App /> */}
  </StrictMode>
);
