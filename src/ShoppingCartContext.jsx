import React, {createContext, useContext, useState} from "react";

const ShoppingCartContext = createContext(); // why

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (context === undefined) {
        throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
    }
    return context;
}

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((currItems) => {
            const existingItem = currItems.find((item) => item.id === product.id);
            if (existingItem) {
                return currItems.map((item) =>
                item.id === product.id ?
                    { ... item, quantity: item.quantity + 1 } : item);
            } else {
                return [...currItems, { ...product, quantity: 1}];
            }
        });
    }

    const removeFromCart = (productId) => {
        setCartItems((currItems) =>
        currItems.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCartItems((currItems) =>
        currItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1} : item));
    };

    const decreaseQuantity = (productId) => {
        setCartItems((currItems) =>
        currItems.map((item) =>
            item.id === productId ? {...item, quantity: item.quantity - 1} : item)
            .filter((item) => item.quantity > 0));
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
