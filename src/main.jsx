import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './index.css';
import { GlobalProvider } from './context/global_context';
import { AuthProvider } from './context/auth_context';
import { LibraryProvider } from './context/library_context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LibraryProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </LibraryProvider>
    </AuthProvider>
  </React.StrictMode>
);
