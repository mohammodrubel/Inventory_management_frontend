import React from 'react';
import ReactDOM from 'react-dom/client'; // Change import statement
import router from './router/router';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './App/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>
        {/* Your router configuration */}
      </RouterProvider>
    </PersistGate>
    <Toaster richColors position="top-right" />
  </Provider>
);
