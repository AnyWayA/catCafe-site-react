import React from 'react';
import blockStyles from '../Block.module.css'

const Contacts = () => {
    return (
        <div id='contacts' className={`${blockStyles.block}`}>
            <h2>Контакты</h2>

            <div>
                You can contact us by number: +083 000 00 00
            </div>

            <div>
                Or you can meet us by address: Vietnam, Nha Trang, Bla bla bla 7
            </div>
        </div>
    );
};

export default Contacts;
