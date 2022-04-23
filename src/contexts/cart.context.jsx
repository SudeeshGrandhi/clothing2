import { createContext, useState, useEffect } from "react";

//productToAdd is an object with price,name,imageUrl

//cartItems is empty array

const ItemToAddInCart = (cartItems, productToAdd) => {
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

const itemToRemoveFromCart = (cartItems, productToRemove) => {
  //find the cart item to remove
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });
  //check if quantity is 1,if it is remove item from cart

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== productToRemove.id;
    });
  }
  //return back cart items with matching cart item with reduced quantity
  return cartItems.map((item) => {
    return item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const itemToRemoveFromCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => {
    return item.id !== productToRemove.id;
  });
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemsFromCart: () => {},
  clearFromCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  price: 0,
  setPrice: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemsToCart = (productToAdd) => {
    setCartItems(ItemToAddInCart(cartItems, productToAdd));
  };
  const removeItemsFromCart = (productToRemove) => {
    setCartItems(itemToRemoveFromCart(cartItems, productToRemove));
  };

  const clearFromCart = (productToRemove) => {
    setCartItems(itemToRemoveFromCartItem(cartItems, productToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((accumalator, cartItem) => {
      return accumalator + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((accumalator, cartItem) => {
      return accumalator + cartItem.quantity * cartItem.price;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    cartCount,
    removeItemsFromCart,
    totalPrice,
    clearFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
