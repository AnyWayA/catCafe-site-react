import React, {useContext} from 'react';
import styles from './Cart.module.css'
import { CartContext } from '../../providers/CartProvider';

const ModalOrder = ({open}) => {
    const { shoppingCart, sum, clearCart } = useContext(CartContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>

                <div>Заказ оформлен!</div>
                <div>Вы заказали <b>{shoppingCart.length}</b> товаров на сумму: <b>{sum}.000</b> dongs</div>

                <a href="/" className={styles.backHome} onClick={() => clearCart()}>Вернуться на главную</a>
            </div>
        </div>
    );
};

export default ModalOrder;
