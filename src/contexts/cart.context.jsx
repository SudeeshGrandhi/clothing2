import { createContext, useState } from "react";

//productToAdd is an object with price,name,imageUrl

//cartItems is empty array

const ItemToAdd = (cartItems, productToAdd) => {
  //find if cartitems contains product to add
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });
  //if found, increase quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  //return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(ItemToAdd(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
