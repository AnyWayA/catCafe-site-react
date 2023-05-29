import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './layout/main/Main';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import PagesProvider from './providers/PagesProvider';
import CartProvider from './providers/CartProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PagesProvider>
      <Header />

      <CartProvider>
        <Main />
      </CartProvider>

      <Footer />
    </PagesProvider>
  </React.StrictMode>
);
