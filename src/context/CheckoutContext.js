import React, { createContext, useContext, useState } from 'react';

const defaultCheckoutContext = {
  cart: []
}

const CheckoutContext = createContext(defaultCheckoutContext);

export function useCheckoutContext() {
  return useContext(CheckoutContext);
}

const CheckoutProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (id) => {
    setCart([...cart, id]);
  }

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        addItemToCart
      }}>
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider;