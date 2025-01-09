import React, {createContext, useContext, useState} from "react";

const ShoppingCartContext = createContext();

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

/*
React Context is ideal when you have data that needs to be accessible by many components at different nesting levels. Common use cases include:

    Theming: Providing a theme (light/dark) to all components.
    Authentication: Managing user login state across the app.
    Language Localization: Managing the current language settings.
    Shopping Cart: Managing items added to the cart from various parts of the app.
    Note: While Context is powerful, it should not be overused. For state that only a few components need, traditional prop drilling might be simpler and more efficient.

    Benefits of Using Context for a Shopping Cart

    Global Accessibility: Allows any component to access or modify the cart without prop drilling.
    Centralized State Management: Keeps cart state in one place, making it easier to maintain and debug.
    Scalability: Facilitates scaling your application as you add more components that interact with the cart.
    Performance Optimization: When used correctly, can help minimize unnecessary re-renders.*/
