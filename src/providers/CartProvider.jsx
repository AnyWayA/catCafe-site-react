import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [shoppingCart, setShoppingCart] = useState([]);

    const [sum, setSum] = useState(0)


    // при первой подгрузке страницы берем информацию из локального хранилища о корзине и помещаем в текущую корзину
    useEffect(() => {
        const savedShoppingCart = localStorage.getItem('shoppingCart');


        if (savedShoppingCart && savedShoppingCart.length > 2) {
            const parsedShoppingCart = JSON.parse(savedShoppingCart);
            setShoppingCart(parsedShoppingCart);
        }
    }, []);


    // при изменении корзины помещаем обновленную ее в локальное хранилище
    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }, [shoppingCart]);



    function addItemToCart(item) {
        setShoppingCart(prev => [...prev, item.id])
    }

    function clearCart(e) {
        e && e.preventDefault();
        setShoppingCart([]);
        setSum(0);
    }

    function decrementItemInCart(item, itemCount, oldPrice) {
        itemCount === 1 && setSum(prev => prev - oldPrice)

        const index = shoppingCart.indexOf(item.id);
        const newShoppingCart = shoppingCart.slice();

        newShoppingCart.splice(index, 1);
        setShoppingCart(newShoppingCart);
    }


    return (
        <CartContext.Provider value={{ shoppingCart, addItemToCart, decrementItemInCart, clearCart, sum, setSum }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
