import { StrictMode, Suspense, lazy } from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';

import Loader from './components/Loader/Loader';

// Функция для искусственной задержки
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Динамическая загрузка с задержкой
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(async () => {
  await delay(5000);
  return import('./App');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
