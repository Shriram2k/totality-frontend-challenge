import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (property) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === property.id
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...property, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        if (updatedItems[itemIndex].quantity > 1) {
          updatedItems[itemIndex].quantity -= 1;
        } else {
          updatedItems.splice(itemIndex, 1);
        }
        return updatedItems;
      }
      return prevItems;
    });
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
