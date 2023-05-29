import React from 'react';
import styles from './Gallery.module.css'
import { FaPaw } from 'react-icons/fa'

const PhotoCard = ({ cat }) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={cat.image} alt="cat" />

            <div className={styles.description}>
                {cat.description}
            </div>

            <div className={styles.title}>
                <FaPaw className={styles.icon} />
                {cat.name}
                <FaPaw className={styles.icon} />
            </div>

        </div>
    );
};

export default PhotoCard;
