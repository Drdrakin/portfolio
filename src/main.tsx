import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterProvider from "./routes/RouterProvider"

// Tailwind
import './styles/output.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider/>
  </StrictMode>,
)
