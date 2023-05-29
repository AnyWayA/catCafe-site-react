import React, { useContext, useState } from 'react';
import Home from '../../pages/Home/Home';
import styles from './Main.module.css'
import styless from '../../pages/Cafe/Cafe.module.css'
import { GiShoppingCart } from 'react-icons/gi'
import { TfiTrash } from 'react-icons/tfi'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cafe from '../../pages/Cafe/Cafe';
import { CartContext } from '../../providers/CartProvider';
import Cart from '../../pages/Cart/Cart';
import ModalDelete from './ModalDelete';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cafe",
    element: <Cafe />
  },
  {
    path: "/shopping-cart",
    element: <Cart />
  }
]);

function Main() {
  const { shoppingCart, clearCart } = useContext(CartContext)

  const [isWantDeleted, setIsWantDeleted] = useState(false);

  function openWindow(e) {
    e.preventDefault();
    setIsWantDeleted(true);
  }

  function closeWindow(e) {
    e.preventDefault();
    setIsWantDeleted(false);
  }

  function closeAndDelete(e) {
    clearCart(e);
    setIsWantDeleted(false);
  }

  return (
    <div className={styles.main}>
      <RouterProvider router={router} />

      {
        shoppingCart.length > 0 &&
        <a href='/shopping-cart' className={styless.basketLink}>
          <div>
            <GiShoppingCart className={styless.basketIcon} />
            <TfiTrash className={styless.basketClean} onClick={(e) => openWindow(e)} />
          </div>

          <p>
            Корзина: <b>{shoppingCart.length}</b>
          </p>
        </a>
      }

      {
        isWantDeleted &&
        <ModalDelete closeWindow={closeWindow} closeAndDelete={closeAndDelete} />
      }
    </div>
  );
}

export default Main;
