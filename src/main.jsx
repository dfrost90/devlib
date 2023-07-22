import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './index.css';
import { GlobalProvider } from './context/global_context';
import { AuthProvider } from './context/auth_context';
import { DataProvider } from './context/data_context';
import { FilterProvider } from './context/filter_context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <FilterProvider>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </FilterProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
