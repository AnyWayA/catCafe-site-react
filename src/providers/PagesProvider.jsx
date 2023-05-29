import React from "react";
import { createContext } from "react";

export const PagesContext = createContext([]);

const PagesProvider = ({ children }) => {
    const blocks = [
        {
            id: 'about',
            title: 'О нас'
        },
        {
            id: 'cats',
            title: 'Котики'
        },
        {
            id: 'contacts',
            title: 'Контакты'
        },
        {
            id: 'cafe',
            title: 'Кафе'
        },
    ]

    return (
        <PagesContext.Provider value={blocks}>
            {children}
        </PagesContext.Provider>
    )
};

export default PagesProvider;
