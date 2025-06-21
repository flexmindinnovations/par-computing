import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/components/ThemeProvider.tsx'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='ui-theme'>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
