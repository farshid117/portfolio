import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';

import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import App from './App';
import './index.css';

//recact-slick css FileCopySharp
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider dir="rtl"
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>

);

