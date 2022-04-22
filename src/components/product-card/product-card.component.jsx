import Button from "../button/button.component";

import "./product-card.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = (props) => {
  const { product } = props;
  const { name, imageUrl, price } = product;
  const { addItemsToCart } = useContext(CartContext);

  const add = () => {
    return addItemsToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={add}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
