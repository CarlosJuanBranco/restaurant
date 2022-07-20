import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from './Pages/Button';
import Menu from './Pages/Menu';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Menu />
    < Button />
 
  </React.StrictMode>
);
