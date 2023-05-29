import React from 'react';
import styles from './Main.module.css'
import { IoMdClose } from "react-icons/io";

const ModalDelete = ({ closeWindow, closeAndDelete }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button onClick={(e) => closeWindow(e)} className={styles.btnClose}>
                    <IoMdClose />
                </button>

                <div className={styles.confirmQuestion}>Вы уверены, что хотите удалить весь заказ?</div>

                <div className={styles.choiceBtn}>
                    <button className={styles.yesBtn} onClick={(e) => closeAndDelete(e)}>да</button>
                    <button className={styles.noBtn} onClick={(e) => closeWindow(e)}>нет</button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;
