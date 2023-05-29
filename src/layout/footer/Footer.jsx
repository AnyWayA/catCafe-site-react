import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <ul className={styles.menu}>
                    <li>Адрес: Вьетнам, г. Нячанг, ул. Лотоса 13</li>
                    <li>Телефон: +83 000 00 00</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
