import React, { useContext } from 'react';
import logo from './logo.svg';
import styles from './Header.module.css'
import { FaPaw } from 'react-icons/fa'
import { PagesContext } from '../../providers/PagesProvider';

const Header = () => {

    const pages = useContext(PagesContext);

    return (
        <header className={styles.header}>
            <div className={styles.main}>
                <div>
                    <a href='/'>
                        <img className={styles.logo} src={logo} alt="logo" />
                    </a>

                    <div className={styles.sign}>
                        <p>ПУШИСТОЕ КАФЕ</p>
                        <FaPaw className={styles.icon} />
                    </div>
                </div>

                <ul className={styles.menu}>
                    {
                        pages.map((element, index) => {
                            if (index === pages.length - 1) {
                                return (
                                    <li key={element.id}>
                                        <a href={`/${element.id}`}>{element.title}</a>
                                    </li>
                                )
                            }
                            else return (
                                <li key={element.id}>
                                    <a href={`/#${element.id}`}>{element.title}</a>
                                </li>
                            )
                        })
                    }
                    <li>tel: +83 000 00 00</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
