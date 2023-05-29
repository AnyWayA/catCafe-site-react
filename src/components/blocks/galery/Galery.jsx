import React from 'react';
import blockStyles from '../Block.module.css'
import styles from './Gallery.module.css'
import PhotoCard from './PhotoCard';

const Galery = () => {
    const cats = [
        {
            id: '1',
            name: 'Alex',
            image: 'https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-file-f6214867-540f-4c24-8ab0-ad327f92e982&mb=webpulse',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quod quos earum, aliquid numquam alias dolorum.Natus quod quos earum, aliquid numquam alias dolorum.'
        },
        {
            id: '2',
            name: 'Carrot',
            image: 'https://fanibani.ru/wp-content/uploads/2022/12/1638465856_22-celes-club-p-dovolnii-kot-zhivotnie-krasivo-foto-23-scaled.jpg',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quod quos earum.'
        },
        {
            id: '3',
            name: 'Lizze',
            image: 'https://lh3.ggpht.com/-Mny74PwtW8A/Vv4Oc_90i1I/AAAAAAAH1vc/YJVQfGt0Tmo/s2048/hd-182411-ASCW182411.jpg',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: '4',
            name: 'Venic',
            image: 'https://javasea.ru/uploads/posts/2019-03/1553769192_oruschiy-ryzhiy-kot.jpg',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quod quos earum, aliquid numquam alias dolorum, fugit ratione repellat vero enim harum odiouid numquam alias dolorum, fugit ratione repellat vero enim harum od'
        },
        {
            id: '5',
            name: 'Night',
            image: 'https://chudo-prirody.com/uploads/posts/2021-08/1628242310_67-p-chernie-kotiki-foto-70.jpg',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quod quos earum, aliquid numquam alias dolorum, fugit ratione repellat vero enim harum odiouid numquam alias dolorum, fugit ratione'
        }
    ]

    return (
        <div id='cats' className={`${blockStyles.block}`}>
            <h2>Котики</h2>

            <div className={styles.gallery}>
                {
                    cats.map(item =>
                        <PhotoCard cat={item} key={item.name} />
                    )
                }
            </div>
        </div>
    );
};

export default Galery;
