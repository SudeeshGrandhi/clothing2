import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = (props) => {
  const { clearFromCart, addItemsToCart, removeItemsFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = props.cartItem;

  const clearCheckoutItemHandler = () => {
    clearFromCart(props.cartItem);
  };

  const addItemHandler = () => {
    addItemsToCart(props.cartItem);
  };

  const removeItemHandler = () => {
    removeItemsFromCart(props.cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCheckoutItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
