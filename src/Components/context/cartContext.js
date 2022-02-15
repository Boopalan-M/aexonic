import React, { useState, createContext } from "react";

export const cartContext = createContext({});
export const CartItemsContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
   
    const exist = cartItems?.find((x) => x.id === product.id);
   
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
   
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onremove = () => {
    setCartItems([]);
  };
  const onDecrease = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <cartContext.Provider value={{ cartItems, onAdd, onremove, onDecrease }}>
     
      {props.children}
    </cartContext.Provider>
  );
};
