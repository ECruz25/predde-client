import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchIsLoggedIn();
  }, [isLoggedIn, total]);

  const fetchIsLoggedIn = () => {
    setTimeout(() => {
      fetch('/api/isLoggedIn').then(response => {
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    }, 30000);
  };

  const addToCart = (product, quantity) => {
    const localCart = cart;
    const localQuantity =
      localCart[product._id] !== undefined
        ? localCart[product._id].quantity
        : 0;

    localCart[product._id] = { ...product, quantity: localQuantity + quantity };
    const localTotal = total + quantity;
    setTotal(localTotal);
    setCart(localCart);
  };

  return (
    <AppContext.Provider
      value={{ state: { cart, total }, addToCart: addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
