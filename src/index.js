import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TableDataProvider } from './context/TableContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TableDataProvider>
      <App />
    </TableDataProvider>
  </React.StrictMode>
);


