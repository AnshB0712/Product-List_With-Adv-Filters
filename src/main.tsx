import React from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsContextProvider from './context/ProductsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
