import React from 'react';
import MenuItem from './MenuItem';
import styles from './Cafe.module.css'

const CafeItem = ({ category, menu}) => {
    return (
        <div>
            <h2>{category.h}</h2>

            <div className={styles.menu}>
                {
                    menu.map(item => (
                        (category.title === item.category) &&
                        <MenuItem
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default CafeItem;
