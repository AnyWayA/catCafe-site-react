import React from 'react';
import styles from './About.module.css'
import blockStyles from '../Block.module.css'

const About = () => {
    return (
        <div id='about' className={`${blockStyles.block} ${styles.block}`}>
            <h2>О нас</h2>

            <div className={styles.about}>
                <div  className={styles.info}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio! Distinctio iusto, quisquam ea corrupti exercitationem ab excepturi ut, cupiditate blanditiis provident maxime neque reprehenderit atque odit omnis repellat corporis! <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repudiandae eius. Eveniet accusantium asperiores voluptas.<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto officia accusamus, saepe asperiores error eveniet mollitia veritatis eum, blanditiis harum nisi libero doloribus ut? Iure itaque corrupti error odio?
                </div>

                <div
                    className={styles.right}
                    style={{ backgroundImage: 'url("https://i.artfile.ru/2200x1482_1036931_[www.ArtFile.ru].jpg")' }}>
                </div>
            </div>


        </div>
    );
};

export default About;
