import React, { useContext, useState } from 'react';
import { CartContext } from '../../providers/CartProvider';
import styles from './Cart.module.css'
import CartItem from './CartItem';
import { menu } from "../../data/cafeData";
import ModalOrder from './ModalOrder';

const Cart = () => {
    const { shoppingCart, sum } = useContext(CartContext)

    const [isReadyToOrder, setIsReadyToOrder] = useState(false);

    return (
        <div className={styles.cart}>
            <div className={styles.itemList}>
                {
                    menu.map((item, index) => shoppingCart.includes(item.id) && <CartItem key={index} item={item} />)
                }
            </div>

            {
                sum ?
                    <div className={styles.orderArea}>
                        <p>
                            <b>Итого: {sum}.000</b>
                        </p>

                        <button
                            className={styles.orderBtn}
                            onClick={() => setIsReadyToOrder(true)}
                        >
                            Оформить заказ
                        </button>

                        {
                            isReadyToOrder && <ModalOrder open={setIsReadyToOrder} />
                        }
                    </div>
                    :
                    <div>Сейчас в корзине нет товаров для заказа :(</div>
            }

        </div>
    );
};

export default Cart;
