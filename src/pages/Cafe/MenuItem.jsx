import React, { useContext, useState, useEffect } from 'react';
import styles from './Cafe.module.css'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from '../../providers/CartProvider';

const MenuItem = ({ item }) => {
    const { shoppingCart, addItemToCart, decrementItemInCart } = useContext(CartContext)
    const [itemCount, setItemCount] = useState()

    useEffect(() => {
        const counter = shoppingCart.filter(i => i === item.id);
        setItemCount(counter.length);
      }, [item.id, shoppingCart]);


    return (
        <div className={styles.card}>
            <img className={styles.image} src={item.image} alt="meal" />

            <div className={styles.text}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.descr}>{item.describtion}</p>
            </div>


            <button className={styles.btnSpace} >
                {
                    shoppingCart.includes(item.id) ?
                        <div>
                            <AiOutlineMinus
                                className={styles.btnIcon}
                                onClick={() => decrementItemInCart(item)}
                            />
                            <p
                                className={styles.btnText}>
                                {itemCount}
                            </p>
                            <AiOutlinePlus
                                className={styles.btnIcon}
                                onClick={() => addItemToCart(item)}
                            />
                        </div>
                        :
                        <div
                            className={styles.btnInactive}
                            onClick={() => addItemToCart(item)}>
                            <p className={styles.btnText}>Добавить</p>
                        </div>
                }
            </button>
        </div>
    );
};

export default MenuItem;
