import React from 'react';
import CafeItem from './CafeItem';
import { menu, categories } from "../../data/cafeData";

const Cafe = () => {

    return (
        <>
            {
                categories.map(category =>
                    <CafeItem
                        key={category.title}
                        category={category}
                        menu={menu}
                    />
                )
            }
        </>
    );
};

export default Cafe;
