import React, { useContext, useState, useEffect } from 'react';
import styles from './Cart.module.css'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from '../../providers/CartProvider';

const CartItem = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const [oldPrice, setOldPrice] = useState();

    const { shoppingCart, addItemToCart, decrementItemInCart, setSum } = useContext(CartContext);

    useEffect(() => {
        const counter = shoppingCart.filter(i => i === item.id);
        setItemCount(counter.length);

    }, [shoppingCart, item.id]);

    useEffect(() => {
        const currentPrice = item.price * itemCount;

        oldPrice ?
            setSum(prev => prev - oldPrice + currentPrice)
            : setSum(prev => prev + currentPrice)

        setOldPrice(currentPrice);

    }, [itemCount, item.price, setSum]);


    return (
        <div className={styles.item}>
            <div>
                <img className={styles.image} src={item.image} alt="" />
            </div>

            <div>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.descr}>{item.describtion}</p>
            </div>

            <div className={styles.quantity}>
                <AiOutlineMinus
                    className={styles.btnIcon}
                    onClick={() => decrementItemInCart(item, itemCount, oldPrice)}
                />

                <p
                    className={styles.quantityNumber}>
                    {itemCount}
                </p>

                <AiOutlinePlus
                    className={styles.btnIcon}
                    onClick={() => addItemToCart(item)}
                />
            </div>

            <div className={styles.priceArea}>
                <b>{item.price * itemCount}.000 </b> <p> dongs</p>
            </div>
        </div>
    );
};

export default CartItem;
